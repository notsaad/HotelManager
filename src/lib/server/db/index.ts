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
        SIN TEXT,
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
        SIN TEXT PRIMARY KEY,
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

export async function loadDatabase(): Promise<void> {
    const insertChainSql = 'INSERT INTO Hotel_Chain (Central_Office_Address, Num_Hotels, Contact_Info) VALUES ($coa, $numHotels, $contactInfo)';
    const insertSupervisorSql = 'INSERT INTO Supervisor (Supervisor_ID, Hotel_Chain, Full_Name, SIN) VALUES ($id, $chain, $name, $sin)';
    const insertHotelSql = 'INSERT INTO Hotel (Hotel_Address, Supervisor_ID, Star_Rating, Num_Rooms, Contact_Info) VALUES ($address, $supervisor, $rating, $numRooms, $contactInfo)';
    const insertEmployeeSql = 'INSERT INTO Employee (SIN, Hotel_Address, Full_Name, Position) VALUES ($sin, $address, $name, $position)';
    const insertCustomerSql = 'INSERT INTO Customer (Customer_ID, Full_Name, Address, System_Registration_Date) VALUES ($id, $name, $address, $date)';
    const insertRoomSql = 'INSERT INTO Hotel_Room (Hotel_Address, Room_Number, Capacity, View_Type, Extendability, Price, Damages, Amenities) VALUES ($address, $number, $capacity, $view, $extend, $price, $damages, $amenities)';
    const insertReservationSql = 'INSERT INTO Reservation (Customer_ID, Hotel_Address, Room_Number, Check_In_Date, Check_Out_Date, Total_Price) VALUES ($customer, $address, $room, $checkIn, $checkOut, $price)';

    const insertChainSqlStmnt = db.prepare(insertChainSql);
    const insertSupervisorSqlStmnt = db.prepare(insertSupervisorSql);
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
        {Supervisor_ID: 1, Hotel_Chain: '123 Main St, New York, NY', Full_Name: 'John Smith', SIN: '123456789'},
        {Supervisor_ID: 2, Hotel_Chain: '123 Main St, New York, NY', Full_Name: 'Jane Doe', SIN: '987654321'},
        {Supervisor_ID: 3, Hotel_Chain: '55 Elm Blvd, Los Angeles, CA', Full_Name: 'Mark Wilson', SIN: '444888222'},
        // ... Add more supervisors, ensuring Hotel_Chain values match existing ones
    ];

    const hotels = [
        {Hotel_Address: '456 Oak Ave, New York, NY', Supervisor_ID: 1, Star_Rating: 4, Num_Rooms: 50, Contact_Info: 'nyhotel1@chain1.com'},
        {Hotel_Address: '987 Sunset Dr, Los Angeles, CA', Supervisor_ID: 3, Star_Rating: 3, Num_Rooms: 35, Contact_Info: 'lahotel1@chain2.com'},
        {Hotel_Address: '321 Broadway, New York, NY', Supervisor_ID: 1, Star_Rating: 5, Num_Rooms: 75, Contact_Info: 'nyhotel2@chain1.com'},
        // ... Add at least 8 hotels, some with the same Supervisor_ID for different chains
    ];

    const employees = [
        {SIN: '555987123', Hotel_Address: '456 Oak Ave, New York, NY', Full_Name: 'Emily Johnson', Position: 'Receptionist'},
        {SIN: '777333666', Hotel_Address: '987 Sunset Dr, Los Angeles, CA', Full_Name: 'Alex Brown', Position: 'Manager'},
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

        const chainExists = 'select exists(select 1 from Hotel_Chain where Central_Office_Address = ?) as found';
        const stmnt = db.prepare(chainExists);
        const exists = stmnt.get(chain.Central_Office_Address).found;

        if (exists) continue;

        insertChainSqlStmnt.run({coa: chain.Central_Office_Address, numHotels: chain.Num_Hotels, contactInfo: chain.Contact_Info});
    }

    for (const supervisor of supervisors) {

        const supervisorExists = 'select exists(select 1 from Supervisor where Supervisor_ID = ?) as found';
        const stmnt = db.prepare(supervisorExists);
        const exists = stmnt.get(supervisor.Supervisor_ID).found;

        if (exists) continue;

        insertSupervisorSqlStmnt.run({ id: supervisor.Supervisor_ID, chain: supervisor.Hotel_Chain, name: supervisor.Full_Name, sin: supervisor.SIN});
    }

    for (const hotel of hotels) {

        const hotelExists = 'select exists(select 1 from Hotel where Hotel_Address = ?) as found';
        const stmnt = db.prepare(hotelExists);
        const exists = stmnt.get(hotel.Hotel_Address).found;

        if (exists) continue;

        insertHotelSqlStmnt.run({ address: hotel.Hotel_Address, supervisor: hotel.Supervisor_ID, rating: hotel.Star_Rating, numRooms: hotel.Num_Rooms, contactInfo: hotel.Contact_Info });
    }

    for (const employee of employees) {

        const employeeExists = 'select exists(select 1 from Employee where SIN = ?) as found';
        const stmnt = db.prepare(employeeExists);
        const exists = stmnt.get(employee.SIN).found;

        if (exists) continue;

        insertEmployeeSqlStmnt.run({ sin: employee.SIN, address: employee.Hotel_Address, name: employee.Full_Name, position: employee.Position });
    }

    for (const customer of customers) {

        const customerExists = 'select exists(select 1 from Customer where Customer_ID = ?) as found';
        const stmnt = db.prepare(customerExists);
        const exists = stmnt.get(customer.Customer_ID).found;

        if (exists) continue;

        insertCustomerSqlStmnt.run({ id: customer.Customer_ID, name: customer.Full_Name, address: customer.Address, date: customer.System_Registration_Date });
    }

    for (const room of hotelRooms) {

        const roomExists = 'select exists(select 1 from Hotel_Room where Hotel_Address = ? and Room_Number = ?) as found';
        const stmnt = db.prepare(roomExists);
        const exists = stmnt.get(room.Hotel_Address, room.Room_Number).found;

        if (exists) continue;

        insertRoomSqlStmnt.run({ address: room.Hotel_Address, number: room.Room_Number, capacity: room.Capacity, view: room.View_Type, extend: room.Extendability, price: room.Price, damages: room.Damages, amenities: room.Amenities });
    }

    for (const reservation of reservations) {

        const reservationExists = 'select exists(select 1 from Reservation where Customer_ID = ? and Hotel_Address = ? and Room_Number = ?) as found';
        const stmnt = db.prepare(reservationExists);
        const exists = stmnt.get(reservation.Customer_ID, reservation.Hotel_Address, reservation.Room_Number).found;

        if (exists) continue;

        insertReservationSqlStmnt.run({ customer: reservation.Customer_ID, address: reservation.Hotel_Address, room: reservation.Room_Number, checkIn: reservation.Check_In_Date, checkOut: reservation.Check_Out_Date, price: reservation.Total_Price });
    }
}

export function getSampleReturn(): HotelChain[] {
    const sql = 'SELECT * FROM Hotel_Chain';
    const stmnt = db.prepare(sql);
    const rows = stmnt.all();
    return rows as Hotel_Chain[];
}