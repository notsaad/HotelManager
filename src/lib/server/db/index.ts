import Database from 'better-sqlite3';
import { HOTEL_DB_PATH } from '$env/static/private';
import type { Hotel_Chain } from './types';

const db = new Database(HOTEL_DB_PATH, { verbose: console.log });

addHotelChainTable();
addSupervisorTable();
addHotelTable();
addEmployeeTable();
addCustomerTable();
addHotelRoomTable();
addReservationTable();

loadDatabase();

function addHotelChainTable() {
  const sql = `
    CREATE TABLE IF NOT EXISTS Hotel_Chain (
        Central_Office_Address TEXT PRIMARY KEY,
        Num_Hotels INTEGER,
        Contact_Info TEXT
    );
  `;
  const stmnt = db.prepare(sql);
  stmnt.run();
}

function addSupervisorTable() {
  const sql = `
    CREATE TABLE IF NOT EXISTS Supervisor (
        Supervisor_ID INTEGER PRIMARY KEY,
        Hotel_Chain TEXT,
        Full_Name TEXT,
        SIN INTEGER,
        FOREIGN KEY (Hotel_Chain) REFERENCES Hotel_Chain(Central_Office_Address) 
    );
    `;
  const stmnt = db.prepare(sql);
  stmnt.run();
}

function addHotelTable() {
  const sql = `
    CREATE TABLE IF NOT EXISTS Hotel (
        Hotel_Address TEXT PRIMARY KEY,
        Supervisor_ID INTEGER,
        Star_Rating INTEGER,
        Num_Rooms INTEGER,
        Contact_Info TEXT,
        FOREIGN KEY (Supervisor_ID) REFERENCES Supervisor(Supervisor_ID) 
    );
    `;
  const stmnt = db.prepare(sql);
  stmnt.run();
}

function addEmployeeTable() {
  const sql = `
    CREATE TABLE IF NOT EXISTS Employee (
        SIN INTEGER PRIMARY KEY,
        Hotel_Address TEXT,
        Full_Name TEXT,
        Position TEXT,
        FOREIGN KEY (Hotel_Address) REFERENCES Hotel(Hotel_Address) 
    );
    `;
  const stmnt = db.prepare(sql);
  stmnt.run();
}

function addCustomerTable() {
  const sql = `
    CREATE TABLE IF NOT EXISTS Customer (
        Customer_ID INTEGER PRIMARY KEY,
        Full_Name TEXT,
        Address TEXT,
        System_Registration_Date DATE 
    );
    `;
  const stmnt = db.prepare(sql);
  stmnt.run();
}

function addHotelRoomTable() {
  const sql = `
    CREATE TABLE IF NOT EXISTS Hotel_Room (
        Hotel_Address TEXT,
        Room_Number TEXT,
        Capacity INTEGER,
        View_Type TEXT,
        Extendability TEXT,
        Price DECIMAL,
        Damages TEXT,
        Amenities TEXT,
        PRIMARY KEY (Hotel_Address, Room_Number), 
        FOREIGN KEY (Hotel_Address) REFERENCES Hotel(Hotel_Address) 
    );
    `;
  const stmnt = db.prepare(sql);
  stmnt.run();
}

function addReservationTable() {
  const sql = `
    CREATE TABLE IF NOT EXISTS Reservation (
        Customer_ID INTEGER,
        Hotel_Address TEXT,
        Room_Number TEXT,
        Check_In_Date DATE,
        Check_Out_Date DATE,
        Total_Price DECIMAL,
        PRIMARY KEY (Customer_ID, Hotel_Address, Room_Number), 
        FOREIGN KEY (Customer_ID) REFERENCES Customer(Customer_ID),
        FOREIGN KEY (Hotel_Address, Room_Number) REFERENCES Hotel_Room(Hotel_Address, Room_Number) 
    );
    `;
  const stmnt = db.prepare(sql);
  stmnt.run();
}

function insertHotelChain(Central_Office_Address: string, numHotels: number, contactInfo: string) {
    const insertChainSql = 'INSERT INTO Hotel_Chain (Central_Office_Address, Num_Hotels, Contact_Info) VALUES ($coa, $numHotels, $contactInfo)';
    const insertChainSqlStmnt = db.prepare(insertChainSql);


    const chainExists = 'select exists(select 1 from Hotel_Chain where Central_Office_Address = ?) as found';
    const stmnt = db.prepare(chainExists);
    const exists = stmnt.get(Central_Office_Address).found;

    if (exists) return;

    insertChainSqlStmnt.run({coa: Central_Office_Address, numHotels: numHotels, contactInfo: contactInfo});
}

function insertSupervisor(Supervisor_ID: number, hotelChain: string, fullName: string, sin: number) {
    const insertSupervisorSql = 'INSERT INTO Supervisor (Supervisor_ID, Hotel_Chain, Full_Name, SIN) VALUES ($id, $chain, $name, $sin)';
    const insertSupervisorSqlStmnt = db.prepare(insertSupervisorSql);


    const supervisorExists = 'select exists(select 1 from Supervisor where Supervisor_ID = ?) as found';
    const stmnt = db.prepare(supervisorExists);
    const exists = stmnt.get(Supervisor_ID).found;

    if (exists) return;

    insertSupervisorSqlStmnt.run({ id: Supervisor_ID, chain: hotelChain, name: fullName, sin: sin});
}

function insertHotel(Hotel_Address: string, Supervisor_ID: number, Star_Rating: number, Num_Rooms: number, Contact_Info: string) {
    const insertHotelSql = 'INSERT INTO Hotel (Hotel_Address, Supervisor_ID, Star_Rating, Num_Rooms, Contact_Info) VALUES ($address, $supervisor, $rating, $numRooms, $contactInfo)';
    const insertHotelSqlStmnt = db.prepare(insertHotelSql);

    const hotelExists = 'select exists(select 1 from Hotel where Hotel_Address = ?) as found';
    const stmnt = db.prepare(hotelExists);
    const exists = stmnt.get(Hotel_Address).found;

    if (exists) return;

    insertHotelSqlStmnt.run({ address: Hotel_Address, supervisor: Supervisor_ID, rating: Star_Rating, numRooms: Num_Rooms, contactInfo: Contact_Info });
}

function insertEmployee(SIN: number, Hotel_Address: string, Full_Name: string, Position: string) {
    const insertEmployeeSql = 'INSERT INTO Employee (SIN, Hotel_Address, Full_Name, Position) VALUES ($sin, $address, $name, $position)';
    const insertEmployeeSqlStmnt = db.prepare(insertEmployeeSql);

    const employeeExists = 'select exists(select 1 from Employee where SIN = ?) as found';
    const stmnt = db.prepare(employeeExists);
    const exists = stmnt.get(SIN).found;

    if (exists) return;

    insertEmployeeSqlStmnt.run({ sin: SIN, address: Hotel_Address, name: Full_Name, position: Position });
}

function insertHotelRoom(Hotel_Address: string, Room_Number: string, Capacity: number, View_Type: string, Extendability: string, Price: number, Damages: string, Amenities: string) {
    const insertRoomSql = 'INSERT INTO Hotel_Room (Hotel_Address, Room_Number, Capacity, View_Type, Extendability, Price, Damages, Amenities) VALUES ($address, $number, $capacity, $view, $extend, $price, $damages, $amenities)';
    const insertRoomSqlStmnt = db.prepare(insertRoomSql);

    const roomExists = 'select exists(select 1 from Hotel_Room where Hotel_Address = ? and Room_Number = ?) as found';
    const stmnt = db.prepare(roomExists);
    const exists = stmnt.get(Hotel_Address, Room_Number).found;

    if (exists) return;

    insertRoomSqlStmnt.run({ address: Hotel_Address, number: Room_Number, capacity: Capacity, view: View_Type, extend: Extendability, price: Price, damages: Damages, amenities: Amenities });
}

function insertCustomer(Customer_ID: number, Full_Name: string, Address: string, System_Registration_Date: string) {
    const insertCustomerSql = 'INSERT INTO Customer (Customer_ID, Full_Name, Address, System_Registration_Date) VALUES ($id, $name, $address, $date)';
    const insertCustomerSqlStmnt = db.prepare(insertCustomerSql);

    const customerExists = 'select exists(select 1 from Customer where Customer_ID = ?) as found';
    const stmnt = db.prepare(customerExists);
    const exists = stmnt.get(Customer_ID).found;

    if (exists) return;

    insertCustomerSqlStmnt.run({ id: Customer_ID, name: Full_Name, address: Address, date: System_Registration_Date });
}

function insertReservation(Customer_ID: number, Hotel_Address: string, Room_Number: string, Check_In_Date: string, Check_Out_Date: string, Total_Price: number) {
    const insertReservationSql = 'INSERT INTO Reservation (Customer_ID, Hotel_Address, Room_Number, Check_In_Date, Check_Out_Date, Total_Price) VALUES ($customer, $address, $room, $checkIn, $checkOut, $price)';
    const insertReservationSqlStmnt = db.prepare(insertReservationSql);

    const reservationExists = 'select exists(select 1 from Reservation where Customer_ID = ? and Hotel_Address = ? and Room_Number = ?) as found';
    const stmnt = db.prepare(reservationExists);
    const exists = stmnt.get(Customer_ID, Hotel_Address, Room_Number).found;

    if (exists) return;

    insertReservationSqlStmnt.run({ customer: Customer_ID, address: Hotel_Address, room: Room_Number, checkIn: Check_In_Date, checkOut: Check_Out_Date, price: Total_Price });
}

export async function loadDatabase(): Promise<void> {
    const insertHotelSql = 'INSERT INTO Hotel (Hotel_Address, Supervisor_ID, Star_Rating, Num_Rooms, Contact_Info) VALUES ($address, $supervisor, $rating, $numRooms, $contactInfo)';
    const insertEmployeeSql = 'INSERT INTO Employee (SIN, Hotel_Address, Full_Name, Position) VALUES ($sin, $address, $name, $position)';
    const insertCustomerSql = 'INSERT INTO Customer (Customer_ID, Full_Name, Address, System_Registration_Date) VALUES ($id, $name, $address, $date)';
    const insertRoomSql = 'INSERT INTO Hotel_Room (Hotel_Address, Room_Number, Capacity, View_Type, Extendability, Price, Damages, Amenities) VALUES ($address, $number, $capacity, $view, $extend, $price, $damages, $amenities)';
    const insertReservationSql = 'INSERT INTO Reservation (Customer_ID, Hotel_Address, Room_Number, Check_In_Date, Check_Out_Date, Total_Price) VALUES ($customer, $address, $room, $checkIn, $checkOut, $price)';

    const insertHotelSqlStmnt = db.prepare(insertHotelSql);
    const insertEmployeeSqlStmnt = db.prepare(insertEmployeeSql);
    const insertCustomerSqlStmnt = db.prepare(insertCustomerSql);
    const insertRoomSqlStmnt = db.prepare(insertRoomSql);
    const insertReservationSqlStmnt = db.prepare(insertReservationSql);

    const Hotel_Chains = [
        {Central_Office_Address: '123 Main St, New York, NY', Num_Hotels: 12, Contact_Info: 'info@chain1.com'},
        {Central_Office_Address: '55 Elm Blvd, Los Angeles, CA', Num_Hotels: 10, Contact_Info: 'support@chain2.org'},
        {Central_Office_Address: '78 Queen St, Toronto, ON', Num_Hotels: 8, Contact_Info: 'contact@chain3.ca'},
        {Central_Office_Address: '22 Rue de Paris, Paris, France', Num_Hotels: 9, Contact_Info: 'info@chain4.fr'},
        {Central_Office_Address: '10 Akasaka, Tokyo, Japan', Num_Hotels: 15, Contact_Info: 'help@chain5.jp'}
    ];

    const supervisors = [
        {Supervisor_ID: 1, Hotel_Chain: '123 Main St, New York, NY', Full_Name: 'John Smith', SIN: 123456789},
        {Supervisor_ID: 2, Hotel_Chain: '123 Main St, New York, NY', Full_Name: 'Jane Doe', SIN: 987654321},
        {Supervisor_ID: 3, Hotel_Chain: '55 Elm Blvd, Los Angeles, CA', Full_Name: 'Mark Wilson', SIN: 444888222},
        // ... Add more supervisors, ensuring Hotel_Chain values match existing ones
    ];

    const hotels = [
        {Hotel_Address: '456 Oak Ave, New York, NY', Supervisor_ID: 1, Star_Rating: 4, Num_Rooms: 50, Contact_Info: 'nyhotel1@chain1.com'},
        {Hotel_Address: '987 Sunset Dr, Los Angeles, CA', Supervisor_ID: 3, Star_Rating: 3, Num_Rooms: 35, Contact_Info: 'lahotel1@chain2.com'},
        {Hotel_Address: '321 Broadway, New York, NY', Supervisor_ID: 1, Star_Rating: 5, Num_Rooms: 75, Contact_Info: 'nyhotel2@chain1.com'},
        // ... Add at least 8 hotels, some with the same Supervisor_ID for different chains
    ];

    const employees = [
        {SIN: 555987123, Hotel_Address: '456 Oak Ave, New York, NY', Full_Name: 'Emily Johnson', Position: 'Receptionist'},
        {SIN: 777333666, Hotel_Address: '987 Sunset Dr, Los Angeles, CA', Full_Name: 'Alex Brown', Position: 'Manager'},
        // ... Add more employees, ensure Hotel_Address exists
    ];

    const hotelRooms = [
        {Hotel_Address: '456 Oak Ave, New York, NY', Room_Number: '101', Capacity: 2, View_Type: 'City', Extendability: 'Yes', Price: 150.00, Damages: 'None', Amenities: 'TV, AC, Minibar'},
        {Hotel_Address: '456 Oak Ave, New York, NY', Room_Number: '205', Capacity: 4, View_Type: 'City', Extendability: 'No', Price: 220.00, Damages: 'Broken lamp', Amenities: 'TV, AC, Balcony'},
        // ... Add rooms for all hotels (at least 5 per hotel)
    ];

    const customers = [
        {Customer_ID: 1, Full_Name: 'Alice Parker', Address: '123 Elm St, NY', System_Registration_Date: '2024-01-12'},
        {Customer_ID: 2, Full_Name: 'Bob Johnson', Address: '456 Main St, LA', System_Registration_Date: '2023-12-20'},
        // ... Add more 
    ];

    const reservations = [
        {Customer_ID: 1, Hotel_Address: '456 Oak Ave, New York, NY', Room_Number: '101', Check_In_Date: '2024-01-25', Check_Out_Date: '2024-01-29', Total_Price: 600.00},
        // ... Add a few, ensuring customers and rooms exist 
    ];

    for (const chain of Hotel_Chains) {
        insertHotelChain(chain.Central_Office_Address, chain.Num_Hotels, chain.Contact_Info);
    }

    for (const supervisor of supervisors) {
        insertSupervisor(supervisor.Supervisor_ID, supervisor.Hotel_Chain, supervisor.Full_Name, supervisor.SIN);
    }

    for (const hotel of hotels) {
        insertHotel(hotel.Hotel_Address, hotel.Supervisor_ID, hotel.Star_Rating, hotel.Num_Rooms, hotel.Contact_Info);
    }

    for (const employee of employees) {
        insertEmployee(employee.SIN, employee.Hotel_Address, employee.Full_Name, employee.Position);
    }

    for (const customer of customers) {
        insertCustomer(customer.Customer_ID, customer.Full_Name, customer.Address, customer.System_Registration_Date);
    }

    for (const room of hotelRooms) {
        insertHotelRoom(room.Hotel_Address, room.Room_Number, room.Capacity, room.View_Type, room.Extendability, room.Price, room.Damages, room.Amenities);
    }

    for (const reservation of reservations) {
        insertReservation(reservation.Customer_ID, reservation.Hotel_Address, reservation.Room_Number, reservation.Check_In_Date, reservation.Check_Out_Date, reservation.Total_Price);
    }
}

export function getSampleReturn(): HotelChain[] {
    const sql = 'SELECT * FROM Hotel_Chain';
    const stmnt = db.prepare(sql);
    const rows = stmnt.all();
    return rows as Hotel_Chain[];
}