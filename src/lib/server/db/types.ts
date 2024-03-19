export type HotelChain = {
    centralOfficeAddress: string;
    numHotels: number;
    contactInfo: string;
}

export type Supervisor = {
    supervisorID: number;
    hotelChain: string;
    fullName: string;
    sin: string;
}

export type Hotel = {
    hotelAddress: string;
    supervisorID: number;
    starRating: number;
    numRooms: number;
    contactInfo: string;
}

export type Customer = {
    customerID: number;
    fullName: string;
    address: string;
    systemRegistrationDate: string;
}

export type HotelRoom = {
    hotelAddress: string;
    roomNumber: string;
    capacity: number;
    viewType: string;
    extendability: string;
    price: number;
    damages: string;
    amenities: string;
}

export type Reservation = {
    customerID: number;
    hotelAddress: string;
    roomNumber: string;
    checkInDate: string;
    checkOutDate: string;
    totalPrice: number;
}