import Database from 'better-sqlite3';
import { HOTEL_DB_PATH } from '$env/static/private';
import type { Hotel, HotelChain, Employee, HotelRoom, Customer, Reservation, hotelRoomQueryOptions } from './types';
import { Hotel_Chains, Hotels, Employees, Hotel_Rooms, Customers, Reservations } from './sampleData';

const db = new Database(HOTEL_DB_PATH); // { verbose: console.log });

addHotelChainTable();
addHotelTable();
addEmployeeTable();
addCustomerTable();
addHotelRoomTable();
addReservationTable();

loadDatabase();

function addHotelChainTable() {
  const sql = `
    CREATE TABLE IF NOT EXISTS Hotel_Chains (
        central_office_address TEXT PRIMARY KEY,
        chain_name TEXT,
        num_hotels INTEGER,
        email_address TEXT,
        phone_number TEXT
    );
  `;
  const stmnt = db.prepare(sql);
  stmnt.run();
}

function addHotelTable() {
    const sql = `
      CREATE TABLE IF NOT EXISTS Hotels (
          hotel_address TEXT PRIMARY KEY,
          central_office_address TEXT,
          area TEXT,
          star_rating INTEGER,
          num_rooms INTEGER,
          contact_info TEXT,
          FOREIGN KEY (central_office_address) REFERENCES Hotel_Chains(central_office_address)
      );
      `;
    const stmnt = db.prepare(sql);
    stmnt.run();
}

function addEmployeeTable() {
    const sql = `
      CREATE TABLE IF NOT EXISTS Employees (
          employee_id INTEGER PRIMARY KEY,
          supervisor_id INTEGER,
          hotel_address TEXT,
          full_name TEXT,
          position TEXT,
          FOREIGN KEY (hotel_address) REFERENCES Hotels(hotel_address),
          FOREIGN KEY (supervisor_id) REFERENCES Employees(employee_id)
      );
      `;
    const stmnt = db.prepare(sql);
    stmnt.run();
}

function addCustomerTable() {
  const sql = `
    CREATE TABLE IF NOT EXISTS Customers (
        customer_id INTEGER PRIMARY KEY,
        full_name TEXT,
        address TEXT,
        system_registration_date DATE 
    );
    `;
  const stmnt = db.prepare(sql);
  stmnt.run();
}

// Here, extendability is a boolean represented as an integer (1 or 0, for true or false, respectively)
function addHotelRoomTable() {
  const sql = `
    CREATE TABLE IF NOT EXISTS Hotel_Rooms (
        hotel_address TEXT,
        room_number INTEGER,
        capacity INTEGER,
        view_type TEXT,
        extendability INTEGER,
        price DECIMAL,
        damages TEXT,
        amenities TEXT,
        PRIMARY KEY (hotel_Address, room_number), 
        FOREIGN KEY (hotel_address) REFERENCES Hotels(hotel_address) 
    );
    `;
  const stmnt = db.prepare(sql);
  stmnt.run();
}

function addReservationTable() {
  const sql = `
    CREATE TABLE IF NOT EXISTS Reservations (
        customer_id INTEGER,
        hotel_address TEXT,
        room_number INTEGER,
        check_in_date DATE,
        check_out_date DATE,
        total_price DECIMAL,
        PRIMARY KEY (customer_id, hotel_address, room_number, check_in_date), 
        FOREIGN KEY (customer_id) REFERENCES Customers(customer_id),
        FOREIGN KEY (hotel_address, room_number) REFERENCES Hotel_Rooms(hotel_address, room_number) 
    );
    `;
  const stmnt = db.prepare(sql);
  stmnt.run();
}

function insertHotelChain(chain: HotelChain) {
    const insertChainSql = 'INSERT INTO Hotel_Chains (central_office_address, chain_name, num_hotels, email_address, phone_number) VALUES ($coa, $chainName, $numHotels, $email, $phone)';
    const insertChainSqlStmnt = db.prepare(insertChainSql);


    const chainExists = 'select exists(select 1 from Hotel_Chains where central_office_address = ?) as found';
    const stmnt = db.prepare(chainExists);
    const exists = stmnt.get(chain.centralOfficeAddress).found;

    if (exists) {
        return
    };

    insertChainSqlStmnt.run({coa: chain.centralOfficeAddress, chainName: chain.chainName, numHotels: chain.numHotels, email: chain.emailAddress, phone: chain.phoneNumber});
}

function insertHotel(hotel: Hotel) {
    const insertHotelSql = 'INSERT INTO Hotels (hotel_address, central_office_address, area, star_rating, num_rooms, contact_info) VALUES ($address, $coa, $area, $rating, $numRooms, $contactInfo)';
    const insertHotelSqlStmnt = db.prepare(insertHotelSql);

    const hotelExists = 'select exists(select 1 from Hotels where hotel_address = ?) as found';
    const stmnt = db.prepare(hotelExists);
    const exists = stmnt.get(hotel.hotelAddress).found;

    if (exists) {
        return
    };

    insertHotelSqlStmnt.run({ address: hotel.hotelAddress, coa: hotel.centralOfficeAddress, area: hotel.area, rating: hotel.starRating, numRooms: hotel.numRooms, contactInfo: hotel.contactInfo });
}

function insertEmployee(employee: Employee) {
    const insertEmployeeSql = 'INSERT INTO Employees (employee_id, supervisor_id, hotel_address, full_name, Position) VALUES ($employee_id, $supervisor_id, $address, $name, $position)';
    const insertEmployeeSqlStmnt = db.prepare(insertEmployeeSql);

    const employeeExists = 'select exists(select 1 from Employees where employee_id = ? and hotel_address = ?) as found';
    const stmnt = db.prepare(employeeExists);
    const exists = stmnt.get(employee.employeeID, employee.hotelAddress).found;

    if (exists) {
        return
    };

    insertEmployeeSqlStmnt.run({ employee_id: employee.employeeID, supervisor_id: employee.supervisorID, address: employee.hotelAddress, name: employee.fullName, position: employee.position });
}

function insertHotelRoom(room: HotelRoom) {
    const insertRoomSql = 'INSERT INTO Hotel_Rooms (hotel_address, room_number, capacity, view_type, extendability, price, damages, amenities) VALUES ($address, $number, $capacity, $view, $extend, $price, $damages, $amenities)';
    const insertRoomSqlStmnt = db.prepare(insertRoomSql);

    const roomExists = 'select exists(select 1 from Hotel_Rooms where hotel_address = ? and room_number = ?) as found';
    const stmnt = db.prepare(roomExists);
    const exists = stmnt.get(room.hotelAddress, room.roomNumber).found;

    if (exists) {
        return
    };

    insertRoomSqlStmnt.run({ address: room.hotelAddress, number: room.roomNumber, capacity: room.capacity, view: room.viewType, extend: room.extendability? 1:0, price: room.price, damages: room.damages, amenities: room.amenities });
}

function insertCustomer(customer: Customer) {
    const insertCustomerSql = 'INSERT INTO Customers (customer_id, full_name, address, system_registration_date) VALUES ($id, $name, $address, $date)';
    const insertCustomerSqlStmnt = db.prepare(insertCustomerSql);

    const customerExists = 'select exists(select 1 from Customers where customer_iD = ?) as found';
    const stmnt = db.prepare(customerExists);
    const exists = stmnt.get(customer.customerID).found;

    if (exists) {
        return
    };

    insertCustomerSqlStmnt.run({ id: customer.customerID, name: customer.fullName, address: customer.address, date: customer.systemRegistrationDate });
}

function insertReservation(reservation: Reservation) {
    const insertReservationSql = 'INSERT INTO Reservations (customer_id, hotel_address, room_number, check_in_date, check_out_date, total_price) VALUES ($customer, $address, $room, $checkIn, $checkOut, $price)';
    const insertReservationSqlStmnt = db.prepare(insertReservationSql);

    const reservationExists = 'select exists(select 1 from Reservations where customer_id = ? and hotel_address = ? and room_number = ? and check_in_date = ?) as found';
    const stmnt = db.prepare(reservationExists);
    const exists = stmnt.get(reservation.customerID, reservation.hotelAddress, reservation.roomNumber, reservation.checkInDate).found;

    if (exists) {
        return
    };

    insertReservationSqlStmnt.run({ customer: reservation.customerID, address: reservation.hotelAddress, room: reservation.roomNumber, checkIn: reservation.checkInDate, checkOut: reservation.checkOutDate, price: reservation.totalPrice });
}

export async function loadDatabase(){

    // check if database exists before loading

    Hotel_Chains.forEach((chain) => {
        insertHotelChain(chain);
    });

    Hotels.forEach((hotel) => {
        insertHotel(hotel);
    });

    Employees.forEach((employee) => {
        insertEmployee(employee);
    });

    Hotel_Rooms.forEach((room) => {
        insertHotelRoom(room);
    });

    Customers.forEach((customer) => {
        insertCustomer(customer);
    });

    Reservations.forEach((reservation) => {
        insertReservation(reservation);
    });

    // for (const customer of customers) {
    //     insertCustomer(customer);
    // }

    // for (const room of hotelRooms) {
    //     insertHotelRoom(room);
    // }

    // for (const reservation of reservations) {
    //     insertReservation(reservation);
    // }
}

export function getHotelChains(): HotelChain[] {
    const sql = 'SELECT chain_name FROM Hotel_Chains';
    const stmnt = db.prepare(sql);
    const rows = stmnt.all();
    return rows as HotelChain[];
}

export function getAllHotelRooms(hotelRoomQueryOptions: hotelRoomQueryOptions) {
    let sql = `SELECT hc.chain_name, h.hotel_address, h.area, h.star_rating, hr.room_number, hr.capacity, hr.view_type, hr.extendability, hr.price
                FROM Hotel_Chains hc
                FULL JOIN Hotels h ON hc.central_office_address = h.central_office_address
                INNER JOIN Hotel_Rooms hr ON h.hotel_address = hr.hotel_address`;

    // Query building
    const whereClauses:string[] = [];
    let parameters:string[] = [];


    if (!hotelRoomQueryOptions) {
        /** removal explained below */
        // sql += " LIMIT 24 OFFSET 0;";
        const stmnt = db.prepare(sql);
        const rows = stmnt.all(...parameters);
        return rows;
    }

    if (hotelRoomQueryOptions.chainNames.length > 0 && hotelRoomQueryOptions.chainNames[0] !== "") { 
        const placeholders = hotelRoomQueryOptions.chainNames.map(() => "?").join(",");
        whereClauses.push(`hc.chain_name IN (${placeholders})`); 
        parameters = parameters.concat(hotelRoomQueryOptions.chainNames);
    }

    if (hotelRoomQueryOptions.area) {
        whereClauses.push("h.area LIKE ?");
        parameters.push('%' + hotelRoomQueryOptions.area + '%');
    }

    if (hotelRoomQueryOptions.starRating > 0) {
        whereClauses.push("h.star_rating >= ?");
        parameters.push(hotelRoomQueryOptions.starRating.toString()); 
    }

    if (hotelRoomQueryOptions.maxPrice > 0) {
        whereClauses.push("hr.price <= ?");
        parameters.push(hotelRoomQueryOptions.maxPrice.toString());
    }

    if (hotelRoomQueryOptions.minPrice > 0) {
        whereClauses.push("hr.price >= ?");
        parameters.push(hotelRoomQueryOptions.minPrice.toString());
    }

    if (whereClauses.length > 0) {
        sql += " WHERE " + whereClauses.join(" AND ");
    }

    /* Not a good idea in this case, aggregation of rooms into hotel locations is done client side
     * So the client side should show a reasonable number of hotels at a time */
    // sql += " LIMIT 24 OFFSET ?;";
    // parameters.push(hotelRoomQueryOptions.offset.toString());

    const stmnt = db.prepare(sql);
    const rows = stmnt.all(...parameters);
    return rows;
}