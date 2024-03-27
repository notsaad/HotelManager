export type HotelChain = {
    centralOfficeAddress: string;
    chainName: string;
    numHotels: number;
    emailAddress: string;
    phoneNumber: string;
}

export type Hotel = {
    hotelAddress: string;
    centralOfficeAddress: string;
    starRating: number;
    numRooms: number;
    contactInfo: string;
}

export type Employee = {
    employeeID: number;
    supervisorID?: number;
    hotelAddress: string;
    fullName: string;
    position: string;
}

export type Supervisor = {
    supervisorID: number;
    hotelAddress: string;
}

export type Customer = {
    customerID: number;
    fullName: string;
    address: string;
    systemRegistrationDate: string; // Maybe change from type string to type Date
}

export type HotelRoom = {
    hotelAddress: string;
    roomNumber: number;
    capacity: number;
    viewType: string;
    extendability: boolean;
    price: number;
    damages: string;
    amenities: string;
}

export type Reservation = {
    customerID: number;
    hotelAddress: string;
    roomNumber: number;
    checkInDate: string; // Maybe change from type string to type Date
    checkOutDate: string; // Maybe change from type string to type Date
    totalPrice: number;
}