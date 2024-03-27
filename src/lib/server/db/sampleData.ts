import type { Employee, Hotel, HotelChain, HotelRoom } from "./types";

export const Hotel_Chains: HotelChain[] = [
    { centralOfficeAddress: "50 York Street, Toronto, ON, Canada", chainName: "Hamlet Hotels", numHotels: 4, emailAddress: "help@hamlethotels.ca", phoneNumber: "416-123-4567" },
    { centralOfficeAddress: "123 Main Blvd, Seattle, WA, USA", chainName: "Cascade Resorts", numHotels: 12, emailAddress: "info@cascaderesorts.com", phoneNumber: "206-555-1234" },
    { centralOfficeAddress: "800 Broadway Ave, New York City, NY, USA", chainName: "Empire Hospitality", numHotels: 8, emailAddress: "bookings@empirehotels.com", phoneNumber: "212-987-6543" },
    { centralOfficeAddress: "Avenida Paseo de la Reforma, Mexico City, Mexico", chainName: "Sol Azteca", numHotels: 20, emailAddress: "reservaciones@solazteca.mx", phoneNumber: " 52 55 5555 1234" },
    { centralOfficeAddress: "300 Bay Street, Suite 1000,  Montreal, QC, Canada", chainName: "Le Fleuron", numHotels: 6, emailAddress: "bonjour@lefleuron.ca", phoneNumber: "514-987-6543" }
];

export const Hotels: Hotel[] = [
    // Hamlet Hotels
    { hotelAddress: "1234 Queen Street, Toronto, ON, Canada", centralOfficeAddress: "50 York Street, Toronto, ON, Canada", starRating: 4, numRooms: 100, contactInfo: "queen@hamlethotels.ca" },
    { hotelAddress: "110 Rue Saint-Catherine, Montreal, QC, Canada", centralOfficeAddress: "50 York Street, Toronto, ON, Canada", starRating: 3, numRooms: 80, contactInfo: "stcatherine@hamlethotels.ca" },
    { hotelAddress: "45 Sparks Street, Ottawa, ON, Canada", centralOfficeAddress: "50 York Street, Toronto, ON, Canada", starRating: 4, numRooms: 120, contactInfo: "sparks@hamlethotels.ca" },
    { hotelAddress: "800 Robson Street, Vancouver, BC, Canada", centralOfficeAddress: "50 York Street, Toronto, ON, Canada", starRating: 5, numRooms: 200, contactInfo: "robson@hamlethotels.ca" },
    { hotelAddress: "167 Portage Avenue, Winnipeg, MB, Canada", centralOfficeAddress: "50 York Street, Toronto, ON, Canada", starRating: 3, numRooms: 95, contactInfo: "portage@hamlethotels.ca" },
    { hotelAddress: "5811 Spring Garden Road, Halifax, NS, Canada", centralOfficeAddress: "50 York Street, Toronto, ON, Canada", starRating: 4, numRooms: 110, contactInfo: "springgarden@hamlethotels.ca" },
    { hotelAddress: "500 Water Street, St. John's, NL, Canada", centralOfficeAddress: "50 York Street, Toronto, ON, Canada", starRating: 3, numRooms: 75, contactInfo: "water@hamlethotels.ca" }, 
    { hotelAddress: "150 King Street, Calgary, AB, Canada", centralOfficeAddress: "50 York Street, Toronto, ON, Canada", starRating: 4, numRooms: 140, contactInfo: "king@hamlethotels.ca" }, 

    // Cascade Resorts
    { hotelAddress: "1234 1st Avenue, Seattle, WA, USA", centralOfficeAddress: "123 Main Blvd, Seattle, WA, USA", starRating: 4, numRooms: 150, contactInfo: "first@cascaderesorts.com" },
    { hotelAddress: "110 2nd Street, Portland, OR, USA", centralOfficeAddress: "123 Main Blvd, Seattle, WA, USA", starRating: 3, numRooms: 120, contactInfo: "second@cascaderesorts.com" },
    { hotelAddress: "555 Market Street, San Francisco, CA, USA", centralOfficeAddress: "123 Main Blvd, Seattle, WA, USA", starRating: 4, numRooms: 180, contactInfo: "market@cascaderesorts.com" },
    { hotelAddress: "900 Wilshire Blvd, Los Angeles, CA, USA", centralOfficeAddress: "123 Main Blvd, Seattle, WA, USA", starRating: 5, numRooms: 250, contactInfo: "wilshire@cascaderesorts.com" },
    { hotelAddress: "200 Pine Street, San Diego, CA, USA", centralOfficeAddress: "123 Main Blvd, Seattle, WA, USA", starRating: 2, numRooms: 100, contactInfo: "pine@cascaderesorts.com" },
    { hotelAddress: "660 Broadway, Denver, CO, USA", centralOfficeAddress: "123 Main Blvd, Seattle, WA, USA", starRating: 4, numRooms: 140, contactInfo: "broadway@cascaderesorts.com" },
    { hotelAddress: "300 Las Vegas Blvd, Las Vegas, NV, USA", centralOfficeAddress: "123 Main Blvd, Seattle, WA, USA", starRating: 5, numRooms: 300, contactInfo: "lasvegas@cascaderesorts.com" },
    { hotelAddress: "456 Elm Street, Phoenix, AZ, USA", centralOfficeAddress: "123 Main Blvd, Seattle, WA, USA", starRating: 3, numRooms: 110, contactInfo: "elm@cascaderesorts.com" },

    // Empire Hospitality
    { hotelAddress: "1234 5th Avenue, New York City, NY, USA", centralOfficeAddress: "800 Broadway Ave, New York City, NY, USA", starRating: 4, numRooms: 93, contactInfo: "fifth@emiprehotels.com" },
    { hotelAddress: "110 Broadway, Brooklyn, NY, USA", centralOfficeAddress: "800 Broadway Ave, New York City, NY, USA", starRating: 3, numRooms: 80, contactInfo: "broadway@empirehotels.com" },
    { hotelAddress: "777 Park Avenue, New York City, NY, USA", centralOfficeAddress: "800 Broadway Ave, New York City, NY, USA", starRating: 5, numRooms: 120, contactInfo: "park@empirehotels.com" },
    { hotelAddress: "2 Wall Street, New York City, NY, USA", centralOfficeAddress: "800 Broadway Ave, New York City, NY, USA", starRating: 4, numRooms: 100, contactInfo: "wall@empirehotels.com" },
    { hotelAddress: "30 Rockefeller Plaza, New York City, NY, USA", centralOfficeAddress: "800 Broadway Ave, New York City, NY, USA", starRating: 4, numRooms: 115, contactInfo: "rockefeller@empirehotels.com" }, 
    { hotelAddress: "200 State Street, Boston, MA, USA", centralOfficeAddress: "800 Broadway Ave, New York City, NY, USA", starRating: 3, numRooms: 90, contactInfo: "state@empirehotels.com" },
    { hotelAddress: "1600 Pennsylvania Ave, Washington D.C., USA", centralOfficeAddress: "800 Broadway Ave, New York City, NY, USA", starRating: 4, numRooms: 130, contactInfo: "pennsylvania@empirehotels.com" },
    { hotelAddress: "900 Michigan Ave, Chicago, IL, USA", centralOfficeAddress: "800 Broadway Ave, New York City, NY, USA", starRating: 2, numRooms: 110, contactInfo: "michigan@empirehotels.com" },

    //Sol Azteca
    { hotelAddress: "1234 Avenida Insurgentes, Mexico City, Mexico", centralOfficeAddress: "Avenida Paseo de la Reforma, Mexico City, Mexico", starRating: 4, numRooms: 150, contactInfo: "insurgentes@solazteca.mx" },
    { hotelAddress: "110 Avenida Juarez, Mexico City, Mexico", centralOfficeAddress: "Avenida Paseo de la Reforma, Mexico City, Mexico", starRating: 3, numRooms: 120, contactInfo: "juarez@solazteca.mx" },
    { hotelAddress: "500 Calle Colón, Guadalajara, Mexico", centralOfficeAddress: "Avenida Paseo de la Reforma, Mexico City, Mexico", starRating: 4, numRooms: 130, contactInfo: "colon@solazteca.mx" },
    { hotelAddress: "30 Avenida de las Américas, Monterrey, Mexico", centralOfficeAddress: "Avenida Paseo de la Reforma, Mexico City, Mexico", starRating: 3, numRooms: 100, contactInfo: "americas@solazteca.mx" },
    { hotelAddress: "250 Avenida Tulum, Cancún, Mexico", centralOfficeAddress: "Avenida Paseo de la Reforma, Mexico City, Mexico", starRating: 5, numRooms: 220, contactInfo: "tulum@solazteca.mx" },
    { hotelAddress: "80 Calle Hidalgo, Puebla, Mexico", centralOfficeAddress: "Avenida Paseo de la Reforma, Mexico City, Mexico", starRating: 3, numRooms: 90, contactInfo: "hidalgo@solazteca.mx" },
    { hotelAddress: "130 Avenida Vallarta, Puerto Vallarta, Mexico", centralOfficeAddress: "Avenida Paseo de la Reforma, Mexico City, Mexico", starRating: 4, numRooms: 160, contactInfo: "vallarta@solazteca.mx" },
    { hotelAddress: "40 Calle Principal, Oaxaca, Mexico", centralOfficeAddress: "Avenida Paseo de la Reforma, Mexico City, Mexico", starRating: 4, numRooms: 110, contactInfo: "principal@solazteca.mx" },

    //Le Fleuron
    { hotelAddress: "1234 Rue Sainte-Catherine, Montreal, QC, Canada", centralOfficeAddress: "300 Bay Street, Suite 1000,  Montreal, QC, Canada", starRating: 4, numRooms: 150, contactInfo: "stcatherine@lefleuron.ca" },
    { hotelAddress: "110 Rue Sherbrooke, Montreal, QC, Canada", centralOfficeAddress: "300 Bay Street, Suite 1000,  Montreal, QC, Canada", starRating: 3, numRooms: 120, contactInfo: "sherbrook@lefleuron.ca" },
    { hotelAddress: "400 Boulevard René-Lévesque, Montreal, QC, Canada", centralOfficeAddress: "300 Bay Street, Suite 1000,  Montreal, QC, Canada", starRating: 4, numRooms: 160, contactInfo: "levesque@lefleuron.ca" },
    { hotelAddress: "85 Rue Crescent, Montreal, QC, Canada", centralOfficeAddress: "300 Bay Street, Suite 1000,  Montreal, QC, Canada", starRating: 3, numRooms: 90, contactInfo: "crescent@lefleuron.ca" },
    { hotelAddress: "200 Rue Peel, Montreal, QC, Canada", centralOfficeAddress: "300 Bay Street, Suite 1000,  Montreal, QC, Canada", starRating: 5, numRooms: 110, contactInfo: "peel@lefleuron.ca" },
    { hotelAddress: "55 Rue Saint-Jacques, Montreal, QC, Canada", centralOfficeAddress: "300 Bay Street, Suite 1000,  Montreal, QC, Canada", starRating: 3, numRooms: 85, contactInfo: "saintjacques@lefleuron.ca" },
    { hotelAddress: "1000 Rue de la Gauchetière, Montreal, QC, Canada", centralOfficeAddress: "300 Bay Street, Suite 1000,  Montreal, QC, Canada", starRating: 4, numRooms: 125, contactInfo: "gauchetiere@lefleuron.ca" },
    { hotelAddress: "1 Rue Frontenac, Quebec City, QC, Canada", centralOfficeAddress: "300 Bay Street, Suite 1000,  Montreal, QC, Canada", starRating: 4, numRooms: 140, contactInfo: "frontenac@lefleuron.ca" },
]



export const Hotel_Rooms: HotelRoom[] = [
    // Hamlet Hotels
    { hotelAddress: "1234 Queen Street, Toronto, ON, Canada", roomNumber: 101, capacity: 1, viewType: "City View", extendability: true, price: 150, damages: "None", amenities: "TV, Mini Fridge, Gym, Free Breakfast" },
    { hotelAddress: "1234 Queen Street, Toronto, ON, Canada", roomNumber: 203, capacity: 2, viewType: "City View", extendability: true, price: 150, damages: "Broken Lampshade", amenities: "AC, Gym, Free Breakfast" },
    { hotelAddress: "1234 Queen Street, Toronto, ON, Canada", roomNumber: 302, capacity: 4, viewType: "City View", extendability: false, price: 200, damages: "None", amenities: "TV, AC, Pool Access, Free Breakfast" },
    { hotelAddress: "1234 Queen Street, Toronto, ON, Canada", roomNumber: 405, capacity: 2, viewType: "City View", extendability: false, price: 125, damages: "None", amenities: "TV, Mini Fridge, Free Breakfast" },
    { hotelAddress: "1234 Queen Street, Toronto, ON, Canada", roomNumber: 510, capacity: 4, viewType: "City View", extendability: true, price: 175, damages: "Small Carpet Stain", amenities: "TV, AC, Gym, Kitchenette" },
    { hotelAddress: "1234 Queen Street, Toronto, ON, Canada", roomNumber: 601, capacity: 3, viewType: "City View", extendability: true, price: 225, damages: "None", amenities: "TV, AC, Pool Access, Jacuzzi, Free Breakfast" },
    { hotelAddress: "1234 Queen Street, Toronto, ON, Canada", roomNumber: 708, capacity: 5, viewType: "City View", extendability: false, price: 100, damages: "None", amenities: "TV, Mini Fridge" },
    { hotelAddress: "1234 Queen Street, Toronto, ON, Canada", roomNumber: 804, capacity: 2, viewType: "City View", extendability: false, price: 150, damages: "None", amenities: "TV, AC, Free Breakfast" },

    { hotelAddress: "110 Rue Saint-Catherine, Montreal, QC, Canada", roomNumber: 101, capacity: 2, viewType: "City View", extendability: true, price: 150, damages: "None", amenities: "TV, Mini Fridge, Gym, Free Breakfast" },
    { hotelAddress: "110 Rue Saint-Catherine, Montreal, QC, Canada", roomNumber: 203, capacity: 2, viewType: "City View", extendability: true, price: 150, damages: "Broken Lampshade", amenities: "AC, Gym, Free Breakfast" },
    { hotelAddress: "110 Rue Saint-Catherine, Montreal, QC, Canada", roomNumber: 302, capacity: 4, viewType: "City View", extendability: false, price: 200, damages: "None", amenities: "TV, AC, Balcony, Free Breakfast" },
    { hotelAddress: "110 Rue Saint-Catherine, Montreal, QC, Canada", roomNumber: 405, capacity: 2, viewType: "Courtyard View", extendability: false, price: 125, damages: "None", amenities: "TV, Mini Fridge, Free Breakfast" },
    { hotelAddress: "110 Rue Saint-Catherine, Montreal, QC, Canada", roomNumber: 510, capacity: 3, viewType: "City View", extendability: true, price: 175, damages: "Small Carpet Stain", amenities: "TV, AC, Gym, Kitchenette" },
    { hotelAddress: "110 Rue Saint-Catherine, Montreal, QC, Canada", roomNumber: 601, capacity: 4, viewType: "City View", extendability: true, price: 225, damages: "None", amenities: "TV, AC, Balcony, Jacuzzi, Free Breakfast" },
    { hotelAddress: "110 Rue Saint-Catherine, Montreal, QC, Canada", roomNumber: 708, capacity: 2, viewType: "Courtyard View", extendability: false, price: 100, damages: "None", amenities: "TV, Mini Fridge" },
    { hotelAddress: "110 Rue Saint-Catherine, Montreal, QC, Canada", roomNumber: 804, capacity: 2, viewType: "City View", extendability: false, price: 150, damages: "None", amenities: "TV, AC, Free Breakfast" },

    { hotelAddress: "45 Sparks Street, Ottawa, ON, Canada", roomNumber: 101, capacity: 2, viewType: "City View", extendability: true, price: 150, damages: "None", amenities: "TV, Mini Fridge, Gym, Free Breakfast" },
    { hotelAddress: "45 Sparks Street, Ottawa, ON, Canada", roomNumber: 203, capacity: 2, viewType: "City View", extendability: true, price: 150, damages: "Broken Lampshade", amenities: "AC, Gym, Free Breakfast" },
    { hotelAddress: "45 Sparks Street, Ottawa, ON, Canada", roomNumber: 302, capacity: 4, viewType: "Parliament View", extendability: false, price: 225, damages: "None", amenities: "TV, AC, Balcony, Free Breakfast" },
    { hotelAddress: "45 Sparks Street, Ottawa, ON, Canada", roomNumber: 405, capacity: 2, viewType: "City View", extendability: false, price: 125, damages: "None", amenities: "TV, Mini Fridge, Free Breakfast" },
    { hotelAddress: "45 Sparks Street, Ottawa, ON, Canada", roomNumber: 510, capacity: 3, viewType: "City View", extendability: true, price: 175, damages: "Small Carpet Stain", amenities: "TV, AC, Gym, Kitchenette" },
    { hotelAddress: "45 Sparks Street, Ottawa, ON, Canada", roomNumber: 601, capacity: 4, viewType: "Parliament View", extendability: true, price: 250, damages: "None", amenities: "TV, AC, Balcony, Jacuzzi, Free Breakfast" },
    { hotelAddress: "45 Sparks Street, Ottawa, ON, Canada", roomNumber: 708, capacity: 2, viewType: "City View", extendability: false, price: 100, damages: "None", amenities: "TV, Mini Fridge" },
    { hotelAddress: "45 Sparks Street, Ottawa, ON, Canada", roomNumber: 804, capacity: 2, viewType: "City View", extendability: false, price: 150, damages: "None", amenities: "TV, AC, Free Breakfast" },

    { hotelAddress: "800 Robson Street, Vancouver, BC, Canada", roomNumber: 101, capacity: 2, viewType: "City View", extendability: true, price: 175, damages: "None", amenities: "TV, Mini Fridge, Gym, Free Breakfast" },
    { hotelAddress: "800 Robson Street, Vancouver, BC, Canada", roomNumber: 203, capacity: 2, viewType: "City View", extendability: true, price: 175, damages: "Broken Lampshade", amenities: "AC, Gym, Free Breakfast" },
    { hotelAddress: "800 Robson Street, Vancouver, BC, Canada", roomNumber: 302, capacity: 4, viewType: "Ocean View", extendability: false, price: 250, damages: "None", amenities: "TV, AC, Balcony, Free Breakfast" },
    { hotelAddress: "800 Robson Street, Vancouver, BC, Canada", roomNumber: 405, capacity: 2, viewType: "City View", extendability: false, price: 150, damages: "None", amenities: "TV, Mini Fridge, Free Breakfast" },
    { hotelAddress: "800 Robson Street, Vancouver, BC, Canada", roomNumber: 510, capacity: 3, viewType: "Ocean View", extendability: true, price: 225, damages: "Small Carpet Stain", amenities: "TV, AC, Gym, Kitchenette" },
    { hotelAddress: "800 Robson Street, Vancouver, BC, Canada", roomNumber: 601, capacity: 4, viewType: "Ocean View", extendability: true, price: 300, damages: "None", amenities: "TV, AC, Balcony, Jacuzzi, Free Breakfast" },
    { hotelAddress: "800 Robson Street, Vancouver, BC, Canada", roomNumber: 708, capacity: 2, viewType: "City View", extendability: false, price: 125, damages: "None", amenities: "TV, Mini Fridge" },
    { hotelAddress: "800 Robson Street, Vancouver, BC, Canada", roomNumber: 804, capacity: 2, viewType: "City View", extendability: false, price: 175, damages: "None", amenities: "TV, AC, Free Breakfast" },

    { hotelAddress: "167 Portage Avenue, Winnipeg, MB, Canada", roomNumber: 101, capacity: 2, viewType: "City View", extendability: true, price: 125, damages: "None", amenities: "TV, Mini Fridge, Gym, Free Breakfast" },
    { hotelAddress: "167 Portage Avenue, Winnipeg, MB, Canada", roomNumber: 203, capacity: 2, viewType: "City View", extendability: true, price: 125, damages: "Broken Lampshade", amenities: "AC, Gym, Free Breakfast" },
    { hotelAddress: "167 Portage Avenue, Winnipeg, MB, Canada", roomNumber: 302, capacity: 4, viewType: "City View", extendability: false, price: 175, damages: "None", amenities: "TV, AC, Free Breakfast" },
    { hotelAddress: "167 Portage Avenue, Winnipeg, MB, Canada", roomNumber: 405, capacity: 2, viewType: "City View", extendability: false, price: 100, damages: "None", amenities: "TV, Mini Fridge, Free Breakfast" },
    { hotelAddress: "167 Portage Avenue, Winnipeg, MB, Canada", roomNumber: 510, capacity: 3, viewType: "City View", extendability: true, price: 150, damages: "Small Carpet Stain", amenities: "TV, AC, Gym, Kitchenette" },
    { hotelAddress: "167 Portage Avenue, Winnipeg, MB, Canada", roomNumber: 601, capacity: 4, viewType: "City View", extendability: true, price: 200, damages: "None", amenities: "TV, AC, Balcony, Free Breakfast" },
    { hotelAddress: "167 Portage Avenue, Winnipeg, MB, Canada", roomNumber: 708, capacity: 2, viewType: "City View", extendability: false, price: 75, damages: "None", amenities: "TV, Mini Fridge" },
    { hotelAddress: "167 Portage Avenue, Winnipeg, MB, Canada", roomNumber: 804, capacity: 2, viewType: "City View", extendability: false, price: 125, damages: "None", amenities: "TV, AC, Free Breakfast" },
];

export const Employees: Employee[] = [
    /* Hamlet Hotels */
    // Queen Street
    { employeeID: 1, supervisorID: undefined, hotelAddress: "1234 Queen Street, Toronto, ON, Canada", fullName: "John Doe", position: "Manager" },
    { employeeID: 2, supervisorID: 1, hotelAddress: "1234 Queen Street, Toronto, ON, Canada", fullName: "Jane Smith", position: "Front Desk Supervisor" },
    { employeeID: 3, supervisorID: 1, hotelAddress: "1234 Queen Street, Toronto, ON, Canada", fullName: "Alice Johnson", position: "Housekeeping Supervisor" },
    { employeeID: 4, supervisorID: 1, hotelAddress: "1234 Queen Street, Toronto, ON, Canada", fullName: "Bob Brown", position: "Housekeeping Staff" },
    { employeeID: 5, supervisorID: 1, hotelAddress: "1234 Queen Street, Toronto, ON, Canada", fullName: "Charlie White", position: "Maintenance Staff" },
    { employeeID: 6, supervisorID: 1, hotelAddress: "1234 Queen Street, Toronto, ON, Canada", fullName: "David Black", position: "Maintenance Supervisor" },
    { employeeID: 7, supervisorID: 1, hotelAddress: "1234 Queen Street, Toronto, ON, Canada", fullName: "Eve Stark", position: "Room Service Staff" },
    { employeeID: 8, supervisorID: 1, hotelAddress: "1234 Queen Street, Toronto, ON, Canada", fullName: "Frank Leopard", position: "Room Service Supervisor" },
    { employeeID: 9, supervisorID: 1, hotelAddress: "1234 Queen Street, Toronto, ON, Canada", fullName: "Grace Ocean", position: "Kitchen Staff" },
    { employeeID: 10, supervisorID: 1, hotelAddress: "1234 Queen Street, Toronto, ON, Canada", fullName: "Henry Cavil", position: "Kitchen Supervisor" },

    // Rue Saint-Catherine
    { employeeID: 11, supervisorID: undefined, hotelAddress: "110 Rue Saint-Catherine, Montreal, QC, Canada", fullName: "Isabella Grace", position: "Manager" },
    { employeeID: 12, supervisorID: 11, hotelAddress: "110 Rue Saint-Catherine, Montreal, QC, Canada", fullName: "Jack Smith", position: "Front Desk Supervisor" },
    { employeeID: 13, supervisorID: 11, hotelAddress: "110 Rue Saint-Catherine, Montreal, QC, Canada", fullName: "Katie Brown", position: "Housekeeping Supervisor" },
    { employeeID: 14, supervisorID: 11, hotelAddress: "110 Rue Saint-Catherine, Montreal, QC, Canada", fullName: "Liam White", position: "Housekeeping Staff" },
    { employeeID: 15, supervisorID: 11, hotelAddress: "110 Rue Saint-Catherine, Montreal, QC, Canada", fullName: "Mia Bees", position: "Maintenance Staff" },
    { employeeID: 16, supervisorID: 11, hotelAddress: "110 Rue Saint-Catherine, Montreal, QC, Canada", fullName: "Noah Speaker", position: "Maintenance Supervisor" },
    { employeeID: 17, supervisorID: 11, hotelAddress: "110 Rue Saint-Catherine, Montreal, QC, Canada", fullName: "Olivia Red", position: "Room Service Staff" },
    { employeeID: 18, supervisorID: 11, hotelAddress: "110 Rue Saint-Catherine, Montreal, QC, Canada", fullName: "Peter Patter", position: "Room Service Supervisor" },
    { employeeID: 19, supervisorID: 11, hotelAddress: "110 Rue Saint-Catherine, Montreal, QC, Canada", fullName: "Quinn Stacey", position: "Kitchen Staff" },
    { employeeID: 20, supervisorID: 11, hotelAddress: "110 Rue Saint-Catherine, Montreal, QC, Canada", fullName: "Rachel Bleep", position: "Kitchen Supervisor" },

    // Sparks Street
    { employeeID: 21, supervisorID: undefined, hotelAddress: "45 Sparks Street, Ottawa, ON, Canada", fullName: "Samuel Trend", position: "Manager" },
    { employeeID: 22, supervisorID: 21, hotelAddress: "45 Sparks Street, Ottawa, ON, Canada", fullName: "Tara Terry", position: "Front Desk Supervisor" },
    { employeeID: 23, supervisorID: 21, hotelAddress: "45 Sparks Street, Ottawa, ON, Canada", fullName: "Ulysses Giveon", position: "Housekeeping Supervisor" },
    { employeeID: 24, supervisorID: 21, hotelAddress: "45 Sparks Street, Ottawa, ON, Canada", fullName: "Violet Lopez", position: "Housekeeping Staff" },
    { employeeID: 25, supervisorID: 21, hotelAddress: "45 Sparks Street, Ottawa, ON, Canada", fullName: "William James", position: "Maintenance Staff" },
    { employeeID: 26, supervisorID: 21, hotelAddress: "45 Sparks Street, Ottawa, ON, Canada", fullName: "Xavier Fax", position: "Maintenance Supervisor" },
    { employeeID: 27, supervisorID: 21, hotelAddress: "45 Sparks Street, Ottawa, ON, Canada", fullName: "Yvonne Bon", position: "Room Service Staff" },
    { employeeID: 28, supervisorID: 21, hotelAddress: "45 Sparks Street, Ottawa, ON, Canada", fullName: "Zara Handm", position: "Room Service Supervisor" },
    { employeeID: 29, supervisorID: 21, hotelAddress: "45 Sparks Street, Ottawa, ON, Canada", fullName: "Adam Tester", position: "Kitchen Staff" },
    { employeeID: 30, supervisorID: 21, hotelAddress: "45 Sparks Street, Ottawa, ON, Canada", fullName: "Bella Caspr", position: "Kitchen Supervisor" },

    // Robson Street
    { employeeID: 31, supervisorID: undefined, hotelAddress: "800 Robson Street, Vancouver, BC, Canada", fullName: "Charles Orange", position: "Manager" },
    { employeeID: 32, supervisorID: 31, hotelAddress: "800 Robson Street, Vancouver, BC, Canada", fullName: "Diana Yellow", position: "Front Desk Supervisor" },
    { employeeID: 33, supervisorID: 31, hotelAddress: "800 Robson Street, Vancouver, BC, Canada", fullName: "Edward Pink", position: "Housekeeping Supervisor" },
    { employeeID: 34, supervisorID: 31, hotelAddress: "800 Robson Street, Vancouver, BC, Canada", fullName: "Fiona Purple", position: "Housekeeping Staff" },
    { employeeID: 35, supervisorID: 31, hotelAddress: "800 Robson Street, Vancouver, BC, Canada", fullName: "George Brown", position: "Maintenance Staff" },
    { employeeID: 36, supervisorID: 31, hotelAddress: "800 Robson Street, Vancouver, BC, Canada", fullName: "Hannah White", position: "Maintenance Supervisor" },
    { employeeID: 37, supervisorID: 31, hotelAddress: "800 Robson Street, Vancouver, BC, Canada", fullName: "Isaac Black", position: "Room Service Staff" },
    { employeeID: 38, supervisorID: 31, hotelAddress: "800 Robson Street, Vancouver, BC, Canada", fullName: "Jasmine Green", position: "Room Service Supervisor" },
    { employeeID: 39, supervisorID: 31, hotelAddress: "800 Robson Street, Vancouver, BC, Canada", fullName: "Kevin Red", position: "Kitchen Staff" },
    { employeeID: 40, supervisorID: 31, hotelAddress: "800 Robson Street, Vancouver, BC, Canada", fullName: "Lily Blue", position: "Kitchen Supervisor" },

    // Portage Avenue
    { employeeID: 41, supervisorID: undefined, hotelAddress: "167 Portage Avenue, Winnipeg, MB, Canada", fullName: "Michael Green", position: "Manager" },
    { employeeID: 42, supervisorID: 41, hotelAddress: "167 Portage Avenue, Winnipeg, MB, Canada", fullName: "Natalie Red", position: "Front Desk Supervisor" },
    { employeeID: 43, supervisorID: 41, hotelAddress: "167 Portage Avenue, Winnipeg, MB, Canada", fullName: "Oscar Blue", position: "Housekeeping Supervisor" },
    { employeeID: 44, supervisorID: 41, hotelAddress: "167 Portage Avenue, Winnipeg, MB, Canada", fullName: "Penelope Orange", position: "Housekeeping Staff" },
    { employeeID: 45, supervisorID: 41, hotelAddress: "167 Portage Avenue, Winnipeg, MB, Canada", fullName: "Quincy Yellow", position: "Maintenance Staff" },
    { employeeID: 46, supervisorID: 41, hotelAddress: "167 Portage Avenue, Winnipeg, MB, Canada", fullName: "Rachel Pink", position: "Maintenance Supervisor" },
    { employeeID: 47, supervisorID: 41, hotelAddress: "167 Portage Avenue, Winnipeg, MB, Canada", fullName: "Sam Brown", position: "Room Service Staff" },
    { employeeID: 48, supervisorID: 41, hotelAddress: "167 Portage Avenue, Winnipeg, MB, Canada", fullName: "Tina Purple", position: "Room Service Supervisor" },
    { employeeID: 49, supervisorID: 41, hotelAddress: "167 Portage Avenue, Winnipeg, MB, Canada", fullName: "Ulysses Black", position: "Kitchen Staff" },
    { employeeID: 50, supervisorID: 41, hotelAddress: "167 Portage Avenue, Winnipeg, MB, Canada", fullName: "Violet Green", position: "Kitchen Supervisor" },

    // Spring Garden Road
    { employeeID: 51, supervisorID: undefined, hotelAddress: "5811 Spring Garden Road, Halifax, NS, Canada", fullName: "William Red", position: "Manager" },
    { employeeID: 52, supervisorID: 51, hotelAddress: "5811 Spring Garden Road, Halifax, NS, Canada", fullName: "Xavier Blue", position: "Front Desk Supervisor" },
    { employeeID: 53, supervisorID: 51, hotelAddress: "5811 Spring Garden Road, Halifax, NS, Canada", fullName: "Yvonne Orange", position: "Housekeeping Supervisor" },
    { employeeID: 54, supervisorID: 51, hotelAddress: "5811 Spring Garden Road, Halifax, NS, Canada", fullName: "Zara Yellow", position: "Housekeeping Staff" },
    { employeeID: 55, supervisorID: 51, hotelAddress: "5811 Spring Garden Road, Halifax, NS, Canada", fullName: "Adam Pink", position: "Maintenance Staff" },
    { employeeID: 56, supervisorID: 51, hotelAddress: "5811 Spring Garden Road, Halifax, NS, Canada", fullName: "Bella Purple", position: "Maintenance Supervisor" },
    { employeeID: 57, supervisorID: 51, hotelAddress: "5811 Spring Garden Road, Halifax, NS, Canada", fullName: "Charles Orange", position: "Room Service Staff" },
    { employeeID: 58, supervisorID: 51, hotelAddress: "5811 Spring Garden Road, Halifax, NS, Canada", fullName: "Diana Yellow", position: "Room Service Supervisor" },
    { employeeID: 59, supervisorID: 51, hotelAddress: "5811 Spring Garden Road, Halifax, NS, Canada", fullName: "Edward Pink", position: "Kitchen Staff" },
    { employeeID: 60, supervisorID: 51, hotelAddress: "5811 Spring Garden Road, Halifax, NS, Canada", fullName: "Fiona Purple", position: "Kitchen Supervisor" },

    // Water Street
    { employeeID: 61, supervisorID: undefined, hotelAddress: "500 Water Street, St. John's, NL, Canada", fullName: "Grace Blue", position: "Manager" },
    { employeeID: 62, supervisorID: 61, hotelAddress: "500 Water Street, St. John's, NL, Canada", fullName: "Henry Orange", position: "Front Desk Supervisor" },
    { employeeID: 63, supervisorID: 61, hotelAddress: "500 Water Street, St. John's, NL, Canada", fullName: "Isabella Pink", position: "Housekeeping Supervisor" },
    { employeeID: 64, supervisorID: 61, hotelAddress: "500 Water Street, St. John's, NL, Canada", fullName: "Jack Purple", position: "Housekeeping Staff" },
    { employeeID: 65, supervisorID: 61, hotelAddress: "500 Water Street, St. John's, NL, Canada", fullName: "Katie Brown", position: "Maintenance Staff" },
    { employeeID: 66, supervisorID: 61, hotelAddress: "500 Water Street, St. John's, NL, Canada", fullName: "Liam White", position: "Maintenance Supervisor" },
    { employeeID: 67, supervisorID: 61, hotelAddress: "500 Water Street, St. John's, NL, Canada", fullName: "Mia Black", position: "Room Service Staff" },
    { employeeID: 68, supervisorID: 61, hotelAddress: "500 Water Street, St. John's, NL, Canada", fullName: "Noah Green", position: "Room Service Supervisor" },
    { employeeID: 69, supervisorID: 61, hotelAddress: "500 Water Street, St. John's, NL, Canada", fullName: "Olivia Red", position: "Kitchen Staff" },
    { employeeID: 70, supervisorID: 61, hotelAddress: "500 Water Street, St. John's, NL, Canada", fullName: "Peter Blue", position: "Kitchen Supervisor" },

    // King Street
    { employeeID: 71, supervisorID: undefined, hotelAddress: "150 King Street, Calgary, AB, Canada", fullName: "Quinn Orange", position: "Manager" },
    { employeeID: 72, supervisorID: 71, hotelAddress: "150 King Street, Calgary, AB, Canada", fullName: "Rachel Yellow", position: "Front Desk Supervisor" },
    { employeeID: 73, supervisorID: 71, hotelAddress: "150 King Street, Calgary, AB, Canada", fullName: "Samuel Gray", position: "Housekeeping Supervisor" },
    { employeeID: 74, supervisorID: 71, hotelAddress: "150 King Street, Calgary, AB, Canada", fullName: "Tara White", position: "Housekeeping Staff" },
    { employeeID: 75, supervisorID: 71, hotelAddress: "150 King Street, Calgary, AB, Canada", fullName: "Ulysses Black", position: "Maintenance Staff" },
    { employeeID: 76, supervisorID: 71, hotelAddress: "150 King Street, Calgary, AB, Canada", fullName: "Violet Green", position: "Maintenance Supervisor" },
    { employeeID: 77, supervisorID: 71, hotelAddress: "150 King Street, Calgary, AB, Canada", fullName: "William Red", position: "Room Service Staff" },
    { employeeID: 78, supervisorID: 71, hotelAddress: "150 King Street, Calgary, AB, Canada", fullName: "Xavier Blue", position: "Room Service Supervisor" },
    { employeeID: 79, supervisorID: 71, hotelAddress: "150 King Street, Calgary, AB, Canada", fullName: "Yvonne Orange", position: "Kitchen Staff" },
    { employeeID: 80, supervisorID: 71, hotelAddress: "150 King Street, Calgary, AB, Canada", fullName: "Zara Yellow", position: "Kitchen Supervisor" },

    /* Cascade Resorts */
    // 1st Avenue
    { employeeID: 81, supervisorID: undefined, hotelAddress: "1234 1st Avenue, Seattle, WA, USA", fullName: "Adam Pink", position: "Manager" },
    { employeeID: 82, supervisorID: 81, hotelAddress: "1234 1st Avenue, Seattle, WA, USA", fullName: "Bella Purple", position: "Front Desk Supervisor" },
    { employeeID: 83, supervisorID: 81, hotelAddress: "1234 1st Avenue, Seattle, WA, USA", fullName: "Charles Orange", position: "Housekeeping Supervisor" },
    { employeeID: 84, supervisorID: 81, hotelAddress: "1234 1st Avenue, Seattle, WA, USA", fullName: "Diana Yellow", position: "Housekeeping Staff" },
    { employeeID: 85, supervisorID: 81, hotelAddress: "1234 1st Avenue, Seattle, WA, USA", fullName: "Edward Pink", position: "Maintenance Staff" },
    { employeeID: 86, supervisorID: 81, hotelAddress: "1234 1st Avenue, Seattle, WA, USA", fullName: "Fiona Purple", position: "Maintenance Supervisor" },
    { employeeID: 87, supervisorID: 81, hotelAddress: "1234 1st Avenue, Seattle, WA, USA", fullName: "Grace Blue", position: "Room Service Staff" },
    { employeeID: 88, supervisorID: 81, hotelAddress: "1234 1st Avenue, Seattle, WA, USA", fullName: "Henry Orange", position: "Room Service Supervisor" },
    { employeeID: 89, supervisorID: 81, hotelAddress: "1234 1st Avenue, Seattle, WA, USA", fullName: "Isabella Pink", position: "Kitchen Staff" },
    { employeeID: 90, supervisorID: 81, hotelAddress: "1234 1st Avenue, Seattle, WA, USA", fullName: "Jack Purple", position: "Kitchen Supervisor" },

    // 2nd Street
    { employeeID: 91, supervisorID: undefined, hotelAddress: "110 2nd Street, Portland, OR, USA", fullName: "Katie Brown", position: "Manager" },
    { employeeID: 92, supervisorID: 91, hotelAddress: "110 2nd Street, Portland, OR, USA", fullName: "Liam White", position: "Front Desk Supervisor" },
    { employeeID: 93, supervisorID: 91, hotelAddress: "110 2nd Street, Portland, OR, USA", fullName: "Mia Black", position: "Housekeeping Supervisor" },
    { employeeID: 94, supervisorID: 91, hotelAddress: "110 2nd Street, Portland, OR, USA", fullName: "Noah Green", position: "Housekeeping Staff" },
    { employeeID: 95, supervisorID: 91, hotelAddress: "110 2nd Street, Portland, OR, USA", fullName: "Olivia Red", position: "Maintenance Staff" },
    { employeeID: 96, supervisorID: 91, hotelAddress: "110 2nd Street, Portland, OR, USA", fullName: "Peter Blue", position: "Maintenance Supervisor" },
    { employeeID: 97, supervisorID: 91, hotelAddress: "110 2nd Street, Portland, OR, USA", fullName: "Quinn Orange", position: "Room Service Staff" },
    { employeeID: 98, supervisorID: 91, hotelAddress: "110 2nd Street, Portland, OR, USA", fullName: "Rachel Yellow", position: "Room Service Supervisor" },
    { employeeID: 99, supervisorID: 91, hotelAddress: "110 2nd Street, Portland, OR, USA", fullName: "Samuel Gray", position: "Kitchen Staff" },
    { employeeID: 100, supervisorID: 91, hotelAddress: "110 2nd Street, Portland, OR, USA", fullName: "Tara White", position: "Kitchen Supervisor" },

    // // Market Street
    { employeeID: 101, supervisorID: undefined, hotelAddress: "555 Market Street, San Francisco, CA, USA", fullName: "Ulysses Ven", position: "Manager" },
    { employeeID: 102, supervisorID: 101, hotelAddress: "555 Market Street, San Francisco, CA, USA", fullName: "Violet Pense", position: "Front Desk Supervisor" },
    { employeeID: 103, supervisorID: 101, hotelAddress: "555 Market Street, San Francisco, CA, USA", fullName: "William Cage", position: "Housekeeping Supervisor" },
    { employeeID: 104, supervisorID: 101, hotelAddress: "555 Market Street, San Francisco, CA, USA", fullName: "Xavier Wyder", position: "Housekeeping Staff" },
    { employeeID: 105, supervisorID: 101, hotelAddress: "555 Market Street, San Francisco, CA, USA", fullName: "Yvonne Rend", position: "Maintenance Staff" },
    { employeeID: 106, supervisorID: 101, hotelAddress: "555 Market Street, San Francisco, CA, USA", fullName: "Zara Silver", position: "Maintenance Supervisor" },
    { employeeID: 107, supervisorID: 101, hotelAddress: "555 Market Street, San Francisco, CA, USA", fullName: "Adam Fabiano", position: "Room Service Staff" },
    { employeeID: 108, supervisorID: 101, hotelAddress: "555 Market Street, San Francisco, CA, USA", fullName: "Bella Adams", position: "Room Service Supervisor" },
    { employeeID: 109, supervisorID: 101, hotelAddress: "555 Market Street, San Francisco, CA, USA", fullName: "Charles Brown", position: "Kitchen Staff" },
    { employeeID: 110, supervisorID: 101, hotelAddress: "555 Market Street, San Francisco, CA, USA", fullName: "Diana Vite", position: "Kitchen Supervisor" },

    // Wilshire Blvd
    { employeeID: 111, supervisorID: undefined, hotelAddress: "900 Wilshire Blvd, Los Angeles, CA, USA", fullName: "Edward Eds", position: "Manager" },
    { employeeID: 112, supervisorID: 111, hotelAddress: "900 Wilshire Blvd, Los Angeles, CA, USA", fullName: "Fiona Apple", position: "Front Desk Supervisor" },
    { employeeID: 113, supervisorID: 111, hotelAddress: "900 Wilshire Blvd, Los Angeles, CA, USA", fullName: "Grace Evans", position: "Housekeeping Supervisor" },
    { employeeID: 114, supervisorID: 111, hotelAddress: "900 Wilshire Blvd, Los Angeles, CA, USA", fullName: "Henry Baker", position: "Housekeeping Staff" },
    { employeeID: 115, supervisorID: 111, hotelAddress: "900 Wilshire Blvd, Los Angeles, CA, USA", fullName: "Isabella Kepalla", position: "Maintenance Staff" },
    { employeeID: 116, supervisorID: 111, hotelAddress: "900 Wilshire Blvd, Los Angeles, CA, USA", fullName: "Jack Frost", position: "Maintenance Supervisor" },
    { employeeID: 117, supervisorID: 111, hotelAddress: "900 Wilshire Blvd, Los Angeles, CA, USA", fullName: "Katie Brown", position: "Room Service Staff" },
    { employeeID: 118, supervisorID: 111, hotelAddress: "900 Wilshire Blvd, Los Angeles, CA, USA", fullName: "Liam Svelte", position: "Room Service Supervisor" },
    { employeeID: 119, supervisorID: 111, hotelAddress: "900 Wilshire Blvd, Los Angeles, CA, USA", fullName: "Mia Valley", position: "Kitchen Staff" },
    { employeeID: 120, supervisorID: 111, hotelAddress: "900 Wilshire Blvd, Los Angeles, CA, USA", fullName: "Noah Walker", position: "Kitchen Supervisor" },

    // Pine Street
    { employeeID: 121, supervisorID: undefined, hotelAddress: "200 Pine Street, San Diego, CA, USA", fullName: "Olivia Red", position: "Manager" },
    { employeeID: 122, supervisorID: 121, hotelAddress: "200 Pine Street, San Diego, CA, USA", fullName: "Peter Blue", position: "Front Desk Supervisor" },
    { employeeID: 123, supervisorID: 121, hotelAddress: "200 Pine Street, San Diego, CA, USA", fullName: "Quinn Orange", position: "Housekeeping Supervisor" },
    { employeeID: 124, supervisorID: 121, hotelAddress: "200 Pine Street, San Diego, CA, USA", fullName: "Rachel Yellow", position: "Housekeeping Staff" },
    { employeeID: 125, supervisorID: 121, hotelAddress: "200 Pine Street, San Diego, CA, USA", fullName: "Samuel Gray", position: "Maintenance Staff" },
    { employeeID: 126, supervisorID: 121, hotelAddress: "200 Pine Street, San Diego, CA, USA", fullName: "Tara White", position: "Maintenance Supervisor" },
    { employeeID: 127, supervisorID: 121, hotelAddress: "200 Pine Street, San Diego, CA, USA", fullName: "Ulysses Black", position: "Room Service Staff" },
    { employeeID: 128, supervisorID: 121, hotelAddress: "200 Pine Street, San Diego, CA, USA", fullName: "Violet Green", position: "Room Service Supervisor" },
    { employeeID: 129, supervisorID: 121, hotelAddress: "200 Pine Street, San Diego, CA, USA", fullName: "William Red", position: "Kitchen Staff" },
    { employeeID: 130, supervisorID: 121, hotelAddress: "200 Pine Street, San Diego, CA, USA", fullName: "Xavier Blue", position: "Kitchen Supervisor" },

    // Broadway
    { employeeID: 131, supervisorID: undefined, hotelAddress: "660 Broadway, Denver, CO, USA", fullName: "Xavier Blue", position: "Manager" },
    { employeeID: 132, supervisorID: 131, hotelAddress: "660 Broadway, Denver, CO, USA", fullName: "Yvonne Orange", position: "Front Desk Supervisor" },
    { employeeID: 133, supervisorID: 131, hotelAddress: "660 Broadway, Denver, CO, USA", fullName: "William Red", position: "Housekeeping Supervisor" },
    { employeeID: 134, supervisorID: 131, hotelAddress: "660 Broadway, Denver, CO, USA", fullName: "Adam Pink", position: "Housekeeping Staff" },
    { employeeID: 135, supervisorID: 131, hotelAddress: "660 Broadway, Denver, CO, USA", fullName: "Bella Purple", position: "Maintenance Staff" },
    { employeeID: 136, supervisorID: 131, hotelAddress: "660 Broadway, Denver, CO, USA", fullName: "Charles Orange", position: "Maintenance Supervisor" },
    { employeeID: 137, supervisorID: 131, hotelAddress: "660 Broadway, Denver, CO, USA", fullName: "Diana Yellow", position: "Room Service Staff" },
    { employeeID: 138, supervisorID: 131, hotelAddress: "660 Broadway, Denver, CO, USA", fullName: "Edward Pink", position: "Room Service Supervisor" },
    { employeeID: 139, supervisorID: 131, hotelAddress: "660 Broadway, Denver, CO, USA", fullName: "Fiona Purple", position: "Kitchen Staff" },
    { employeeID: 140, supervisorID: 131, hotelAddress: "660 Broadway, Denver, CO, USA", fullName: "Grace Blue", position: "Kitchen Supervisor" },

    // Las Vegas Blvd
    { employeeID: 141, supervisorID: undefined, hotelAddress: "300 Las Vegas Blvd, Las Vegas, NV, USA", fullName: "Henry Orange", position: "Manager" },
    { employeeID: 142, supervisorID: 141, hotelAddress: "300 Las Vegas Blvd, Las Vegas, NV, USA", fullName: "Isabella Pink", position: "Front Desk Supervisor" },
    { employeeID: 143, supervisorID: 141, hotelAddress: "300 Las Vegas Blvd, Las Vegas, NV, USA", fullName: "Jack Purple", position: "Housekeeping Supervisor" },
    { employeeID: 144, supervisorID: 141, hotelAddress: "300 Las Vegas Blvd, Las Vegas, NV, USA", fullName: "Katie Brown", position: "Housekeeping Staff" },
    { employeeID: 145, supervisorID: 141, hotelAddress: "300 Las Vegas Blvd, Las Vegas, NV, USA", fullName: "Liam White", position: "Maintenance Staff" },
    { employeeID: 146, supervisorID: 141, hotelAddress: "300 Las Vegas Blvd, Las Vegas, NV, USA", fullName: "Mia Black", position: "Maintenance Supervisor" },
    { employeeID: 147, supervisorID: 141, hotelAddress: "300 Las Vegas Blvd, Las Vegas, NV, USA", fullName: "Noah Green", position: "Room Service Staff" },
    { employeeID: 148, supervisorID: 141, hotelAddress: "300 Las Vegas Blvd, Las Vegas, NV, USA", fullName: "Olivia Red", position: "Room Service Supervisor" },
    { employeeID: 149, supervisorID: 141, hotelAddress: "300 Las Vegas Blvd, Las Vegas, NV, USA", fullName: "Peter Blue", position: "Kitchen Staff" },
    { employeeID: 150, supervisorID: 141, hotelAddress: "300 Las Vegas Blvd, Las Vegas, NV, USA", fullName: "Quinn Orange", position: "Kitchen Supervisor" },

    // Elm Street
    { employeeID: 151, supervisorID: undefined, hotelAddress: "456 Elm Street, Phoenix, AZ, USA", fullName: "John Doe", position: "Manager" },
    { employeeID: 152, supervisorID: 151, hotelAddress: "456 Elm Street, Phoenix, AZ, USA", fullName: "Jane Smith", position: "Front Desk Supervisor" },
    { employeeID: 153, supervisorID: 151, hotelAddress: "456 Elm Street, Phoenix, AZ, USA", fullName: "Alice Johnson", position: "Housekeeping Supervisor" },
    { employeeID: 154, supervisorID: 151, hotelAddress: "456 Elm Street, Phoenix, AZ, USA", fullName: "Bob Brown", position: "Housekeeping Staff" },
    { employeeID: 155, supervisorID: 151, hotelAddress: "456 Elm Street, Phoenix, AZ, USA", fullName: "Charlie White", position: "Maintenance Staff" },
    { employeeID: 156, supervisorID: 151, hotelAddress: "456 Elm Street, Phoenix, AZ, USA", fullName: "David Black", position: "Maintenance Supervisor" },
    { employeeID: 157, supervisorID: 151, hotelAddress: "456 Elm Street, Phoenix, AZ, USA", fullName: "Eve Stark", position: "Room Service Staff" },
    { employeeID: 158, supervisorID: 151, hotelAddress: "456 Elm Street, Phoenix, AZ, USA", fullName: "Frank Leopard", position: "Room Service Supervisor" },
    { employeeID: 159, supervisorID: 151, hotelAddress: "456 Elm Street, Phoenix, AZ, USA", fullName: "Grace Ocean", position: "Kitchen Staff" },
    { employeeID: 160, supervisorID: 151, hotelAddress: "456 Elm Street, Phoenix, AZ, USA", fullName: "Henry Cavil", position: "Kitchen Supervisor" },

    /* Cascade Resorts */
    // 1st Avenue
    { employeeID: 161, supervisorID: undefined, hotelAddress: "1234 1st Avenue, Seattle, WA, USA", fullName: "Adam Pink", position: "Manager" },
    { employeeID: 162, supervisorID: 161, hotelAddress: "1234 1st Avenue, Seattle, WA, USA", fullName: "Bella Purple", position: "Front Desk Supervisor" },
    { employeeID: 163, supervisorID: 161, hotelAddress: "1234 1st Avenue, Seattle, WA, USA", fullName: "Charles Orange", position: "Housekeeping Supervisor" },
    { employeeID: 164, supervisorID: 161, hotelAddress: "1234 1st Avenue, Seattle, WA, USA", fullName: "Diana Yellow", position: "Housekeeping Staff" },
    { employeeID: 165, supervisorID: 161, hotelAddress: "1234 1st Avenue, Seattle, WA, USA", fullName: "Edward Pink", position: "Maintenance Staff" },
    { employeeID: 166, supervisorID: 161, hotelAddress: "1234 1st Avenue, Seattle, WA, USA", fullName: "Fiona Purple", position: "Maintenance Supervisor" },
    { employeeID: 167, supervisorID: 161, hotelAddress: "1234 1st Avenue, Seattle, WA, USA", fullName: "Grace Blue", position: "Room Service Staff" },
    { employeeID: 168, supervisorID: 161, hotelAddress: "1234 1st Avenue, Seattle, WA, USA", fullName: "Henry Orange", position: "Room Service Supervisor" },
    { employeeID: 169, supervisorID: 161, hotelAddress: "1234 1st Avenue, Seattle, WA, USA", fullName: "Isabella Pink", position: "Kitchen Staff" },
    { employeeID: 170, supervisorID: 161, hotelAddress: "1234 1st Avenue, Seattle, WA, USA", fullName: "Jack Purple", position: "Kitchen Supervisor" },

    // 2nd Street
    { employeeID: 171, supervisorID: undefined, hotelAddress: "110 2nd Street, Portland, OR, USA", fullName: "Katie Brown", position: "Manager" },
    { employeeID: 172, supervisorID: 171, hotelAddress: "110 2nd Street, Portland, OR, USA", fullName: "Liam White", position: "Front Desk Supervisor" },
    { employeeID: 173, supervisorID: 171, hotelAddress: "110 2nd Street, Portland, OR, USA", fullName: "Mia Black", position: "Housekeeping Supervisor" },
    { employeeID: 174, supervisorID: 171, hotelAddress: "110 2nd Street, Portland, OR, USA", fullName: "Noah Green", position: "Housekeeping Staff" },
    { employeeID: 175, supervisorID: 171, hotelAddress: "110 2nd Street, Portland, OR, USA", fullName: "Olivia Red", position: "Maintenance Staff" },
    { employeeID: 176, supervisorID: 171, hotelAddress: "110 2nd Street, Portland, OR, USA", fullName: "Peter Blue", position: "Maintenance Supervisor" },
    { employeeID: 177, supervisorID: 171, hotelAddress: "110 2nd Street, Portland, OR, USA", fullName: "Quinn Orange", position: "Room Service Staff" },
    { employeeID: 178, supervisorID: 171, hotelAddress: "110 2nd Street, Portland, OR, USA", fullName: "Rachel Yellow", position: "Room Service Supervisor" },
    { employeeID: 179, supervisorID: 171, hotelAddress: "110 2nd Street, Portland, OR, USA", fullName: "Samuel Gray", position: "Kitchen Staff" },
    { employeeID: 180, supervisorID: 171, hotelAddress: "110 2nd Street, Portland, OR, USA", fullName: "Tara White", position: "Kitchen Supervisor" },

    // Market Street
    { employeeID: 181, supervisorID: undefined, hotelAddress: "555 Market Street, San Francisco, CA, USA", fullName: "Ulysses Ven", position: "Manager" },
    { employeeID: 182, supervisorID: 181, hotelAddress: "555 Market Street, San Francisco, CA, USA", fullName: "Violet Pense", position: "Front Desk Supervisor" },
    { employeeID: 183, supervisorID: 181, hotelAddress: "555 Market Street, San Francisco, CA, USA", fullName: "William Cage", position: "Housekeeping Supervisor" },
    { employeeID: 184, supervisorID: 181, hotelAddress: "555 Market Street, San Francisco, CA, USA", fullName: "Xavier Wyder", position: "Housekeeping Staff" },
    { employeeID: 185, supervisorID: 181, hotelAddress: "555 Market Street, San Francisco, CA, USA", fullName: "Yvonne Rend", position: "Maintenance Staff" },
    { employeeID: 186, supervisorID: 181, hotelAddress: "555 Market Street, San Francisco, CA, USA", fullName: "Zara Silver", position: "Maintenance Supervisor" },
    { employeeID: 187, supervisorID: 181, hotelAddress: "555 Market Street, San Francisco, CA, USA", fullName: "Adam Fabiano", position: "Room Service Staff" },
    { employeeID: 188, supervisorID: 181, hotelAddress: "555 Market Street, San Francisco, CA, USA", fullName: "Bella Adams", position: "Room Service Supervisor" },
    { employeeID: 189, supervisorID: 181, hotelAddress: "555 Market Street, San Francisco, CA, USA", fullName: "Charles Brown", position: "Kitchen Staff" },
    { employeeID: 190, supervisorID: 181, hotelAddress: "555 Market Street, San Francisco, CA, USA", fullName: "Diana Vite", position: "Kitchen Supervisor" },

    // Wilshire Blvd
    { employeeID: 191, supervisorID: undefined, hotelAddress: "900 Wilshire Blvd, Los Angeles, CA, USA", fullName: "Edward Eds", position: "Manager" },
    { employeeID: 192, supervisorID: 191, hotelAddress: "900 Wilshire Blvd, Los Angeles, CA, USA", fullName: "Fiona Apple", position: "Front Desk Supervisor" },
    { employeeID: 193, supervisorID: 191, hotelAddress: "900 Wilshire Blvd, Los Angeles, CA, USA", fullName: "Grace Evans", position: "Housekeeping Supervisor" },
    { employeeID: 194, supervisorID: 191, hotelAddress: "900 Wilshire Blvd, Los Angeles, CA, USA", fullName: "Henry Baker", position: "Housekeeping Staff" },
    { employeeID: 195, supervisorID: 191, hotelAddress: "900 Wilshire Blvd, Los Angeles, CA, USA", fullName: "Isabella Kepalla", position: "Maintenance Staff" },
    { employeeID: 196, supervisorID: 191, hotelAddress: "900 Wilshire Blvd, Los Angeles, CA, USA", fullName: "Jack Frost", position: "Maintenance Supervisor" },
    { employeeID: 197, supervisorID: 191, hotelAddress: "900 Wilshire Blvd, Los Angeles, CA, USA", fullName: "Katie Brown", position: "Room Service Staff" },
    { employeeID: 198, supervisorID: 191, hotelAddress: "900 Wilshire Blvd, Los Angeles, CA, USA", fullName: "Liam Svelte", position: "Room Service Supervisor" },
    { employeeID: 199, supervisorID: 191, hotelAddress: "900 Wilshire Blvd, Los Angeles, CA, USA", fullName: "Mia Valley", position: "Kitchen Staff" },
    { employeeID: 200, supervisorID: 191, hotelAddress: "900 Wilshire Blvd, Los Angeles, CA, USA", fullName: "Noah Walker", position: "Kitchen Supervisor" },

    // Pine Street
    { employeeID: 201, supervisorID: undefined, hotelAddress: "200 Pine Street, San Diego, CA, USA", fullName: "Olivia Red", position: "Manager" },
    { employeeID: 202, supervisorID: 201, hotelAddress: "200 Pine Street, San Diego, CA, USA", fullName: "Peter Blue", position: "Front Desk Supervisor" },
    { employeeID: 203, supervisorID: 201, hotelAddress: "200 Pine Street, San Diego, CA, USA", fullName: "Quinn Orange", position: "Housekeeping Supervisor" },
    { employeeID: 204, supervisorID: 201, hotelAddress: "200 Pine Street, San Diego, CA, USA", fullName: "Rachel Yellow", position: "Housekeeping Staff" },
    { employeeID: 205, supervisorID: 201, hotelAddress: "200 Pine Street, San Diego, CA, USA", fullName: "Samuel Gray", position: "Maintenance Staff" },
    { employeeID: 206, supervisorID: 201, hotelAddress: "200 Pine Street, San Diego, CA, USA", fullName: "Tara White", position: "Maintenance Supervisor" },
    { employeeID: 207, supervisorID: 201, hotelAddress: "200 Pine Street, San Diego, CA, USA", fullName: "Ulysses Black", position: "Room Service Staff" },
    { employeeID: 208, supervisorID: 201, hotelAddress: "200 Pine Street, San Diego, CA, USA", fullName: "Violet Green", position: "Room Service Supervisor" },
    { employeeID: 209, supervisorID: 201, hotelAddress: "200 Pine Street, San Diego, CA, USA", fullName: "William Red", position: "Kitchen Staff" },
    { employeeID: 210, supervisorID: 201, hotelAddress: "200 Pine Street, San Diego, CA, USA", fullName: "Xavier Blue", position: "Kitchen Supervisor" },

    // Broadway
    { employeeID: 211, supervisorID: undefined, hotelAddress: "660 Broadway, Denver, CO, USA", fullName: "Xavier Blue", position: "Manager" },
    { employeeID: 212, supervisorID: 211, hotelAddress: "660 Broadway, Denver, CO, USA", fullName: "Yvonne Orange", position: "Front Desk Supervisor" },
    { employeeID: 213, supervisorID: 211, hotelAddress: "660 Broadway, Denver, CO, USA", fullName: "William Red", position: "Housekeeping Supervisor" },
    { employeeID: 214, supervisorID: 211, hotelAddress: "660 Broadway, Denver, CO, USA", fullName: "Adam Pink", position: "Housekeeping Staff" },
    { employeeID: 215, supervisorID: 211, hotelAddress: "660 Broadway, Denver, CO, USA", fullName: "Bella Purple", position: "Maintenance Staff" },
    { employeeID: 216, supervisorID: 211, hotelAddress: "660 Broadway, Denver, CO, USA", fullName: "Charles Orange", position: "Maintenance Supervisor" },
    { employeeID: 217, supervisorID: 211, hotelAddress: "660 Broadway, Denver, CO, USA", fullName: "Diana Yellow", position: "Room Service Staff" },
    { employeeID: 218, supervisorID: 211, hotelAddress: "660 Broadway, Denver, CO, USA", fullName: "Edward Pink", position: "Room Service Supervisor" },
    { employeeID: 219, supervisorID: 211, hotelAddress: "660 Broadway, Denver, CO, USA", fullName: "Fiona Purple", position: "Kitchen Staff" },
    { employeeID: 220, supervisorID: 211, hotelAddress: "660 Broadway, Denver, CO, USA", fullName: "Grace Blue", position: "Kitchen Supervisor" },

    // Las Vegas Blvd
    { employeeID: 221, supervisorID: undefined, hotelAddress: "300 Las Vegas Blvd, Las Vegas, NV, USA", fullName: "John Doe", position: "Manager" },
    { employeeID: 222, supervisorID: 221, hotelAddress: "300 Las Vegas Blvd, Las Vegas, NV, USA", fullName: "Jane Smith", position: "Front Desk Supervisor" },
    { employeeID: 223, supervisorID: 221, hotelAddress: "300 Las Vegas Blvd, Las Vegas, NV, USA", fullName: "Alice Johnson", position: "Housekeeping Supervisor" },
    { employeeID: 224, supervisorID: 221, hotelAddress: "300 Las Vegas Blvd, Las Vegas, NV, USA", fullName: "Bob Brown", position: "Housekeeping Staff" },
    { employeeID: 225, supervisorID: 221, hotelAddress: "300 Las Vegas Blvd, Las Vegas, NV, USA", fullName: "Charlie White", position: "Maintenance Staff" },
    { employeeID: 226, supervisorID: 221, hotelAddress: "300 Las Vegas Blvd, Las Vegas, NV, USA", fullName: "David Black", position: "Maintenance Supervisor" },
    { employeeID: 227, supervisorID: 221, hotelAddress: "300 Las Vegas Blvd, Las Vegas, NV, USA", fullName: "Eve Stark", position: "Room Service Staff" },
    { employeeID: 228, supervisorID: 221, hotelAddress: "300 Las Vegas Blvd, Las Vegas, NV, USA", fullName: "Frank Leopard", position: "Room Service Supervisor" },
    { employeeID: 229, supervisorID: 221, hotelAddress: "300 Las Vegas Blvd, Las Vegas, NV, USA", fullName: "Grace Ocean", position: "Kitchen Staff" },
    { employeeID: 230, supervisorID: 221, hotelAddress: "300 Las Vegas Blvd, Las Vegas, NV, USA", fullName: "Henry Cavil", position: "Kitchen Supervisor" },

    // Elm Street
    { employeeID: 231, supervisorID: undefined, hotelAddress: "456 Elm Street, Phoenix, AZ, USA", fullName: "John Doe", position: "Manager" },
    { employeeID: 232, supervisorID: 231, hotelAddress: "456 Elm Street, Phoenix, AZ, USA", fullName: "Jane Smith", position: "Front Desk Supervisor" },
    { employeeID: 233, supervisorID: 231, hotelAddress: "456 Elm Street, Phoenix, AZ, USA", fullName: "Alice Johnson", position: "Housekeeping Supervisor" },
    { employeeID: 234, supervisorID: 231, hotelAddress: "456 Elm Street, Phoenix, AZ, USA", fullName: "Bob Brown", position: "Housekeeping Staff" },
    { employeeID: 235, supervisorID: 231, hotelAddress: "456 Elm Street, Phoenix, AZ, USA", fullName: "Charlie White", position: "Maintenance Staff" },
    { employeeID: 236, supervisorID: 231, hotelAddress: "456 Elm Street, Phoenix, AZ, USA", fullName: "David Black", position: "Maintenance Supervisor" },
    { employeeID: 237, supervisorID: 231, hotelAddress: "456 Elm Street, Phoenix, AZ, USA", fullName: "Eve Stark", position: "Room Service Staff" },
    { employeeID: 238, supervisorID: 231, hotelAddress: "456 Elm Street, Phoenix, AZ, USA", fullName: "Frank Leopard", position: "Room Service Supervisor" },
    { employeeID: 239, supervisorID: 231, hotelAddress: "456 Elm Street, Phoenix, AZ, USA", fullName: "Grace Ocean", position: "Kitchen Staff" },
    { employeeID: 240, supervisorID: 231, hotelAddress: "456 Elm Street, Phoenix, AZ, USA", fullName: "Henry Cavil", position: "Kitchen Supervisor" },

    /* Empire Hospitality */
    // 5th Avenue
    { employeeID: 241, supervisorID: undefined, hotelAddress: "1234 5th Avenue, New York City, NY, USA", fullName: "John Doe", position: "Manager" },
    { employeeID: 242, supervisorID: 241, hotelAddress: "1234 5th Avenue, New York City, NY, USA", fullName: "Jane Smith", position: "Front Desk Supervisor" },
    { employeeID: 243, supervisorID: 241, hotelAddress: "1234 5th Avenue, New York City, NY, USA", fullName: "Alice Johnson", position: "Housekeeping Supervisor" },
    { employeeID: 244, supervisorID: 241, hotelAddress: "1234 5th Avenue, New York City, NY, USA", fullName: "Bob Brown", position: "Housekeeping Staff" },
    { employeeID: 245, supervisorID: 241, hotelAddress: "1234 5th Avenue, New York City, NY, USA", fullName: "Charlie White", position: "Maintenance Staff" },
    { employeeID: 246, supervisorID: 241, hotelAddress: "1234 5th Avenue, New York City, NY, USA", fullName: "David Black", position: "Maintenance Supervisor" },
    { employeeID: 247, supervisorID: 241, hotelAddress: "1234 5th Avenue, New York City, NY, USA", fullName: "Eve Stark", position: "Room Service Staff" },
    { employeeID: 248, supervisorID: 241, hotelAddress: "1234 5th Avenue, New York City, NY, USA", fullName: "Frank Leopard", position: "Room Service Supervisor" },
    { employeeID: 249, supervisorID: 241, hotelAddress: "1234 5th Avenue, New York City, NY, USA", fullName: "Grace Ocean", position: "Kitchen Staff" },
    { employeeID: 250, supervisorID: 241, hotelAddress: "1234 5th Avenue, New York City, NY, USA", fullName: "Henry Cavil", position: "Kitchen Supervisor" },

    // Broadway
    { employeeID: 251, supervisorID: undefined, hotelAddress: "110 Broadway, Brooklyn, NY, USA", fullName: "John Doe", position: "Manager" },
    { employeeID: 252, supervisorID: 251, hotelAddress: "110 Broadway, Brooklyn, NY, USA", fullName: "Jane Smith", position: "Front Desk Supervisor" },
    { employeeID: 253, supervisorID: 251, hotelAddress: "110 Broadway, Brooklyn, NY, USA", fullName: "Alice Johnson", position: "Housekeeping Supervisor" },
    { employeeID: 254, supervisorID: 251, hotelAddress: "110 Broadway, Brooklyn, NY, USA", fullName: "Bob Brown", position: "Housekeeping Staff" },
    { employeeID: 255, supervisorID: 251, hotelAddress: "110 Broadway, Brooklyn, NY, USA", fullName: "Charlie White", position: "Maintenance Staff" },
    { employeeID: 256, supervisorID: 251, hotelAddress: "110 Broadway, Brooklyn, NY, USA", fullName: "David Black", position: "Maintenance Supervisor" },
    { employeeID: 257, supervisorID: 251, hotelAddress: "110 Broadway, Brooklyn, NY, USA", fullName: "Eve Stark", position: "Room Service Staff" },
    { employeeID: 258, supervisorID: 251, hotelAddress: "110 Broadway, Brooklyn, NY, USA", fullName: "Frank Leopard", position: "Room Service Supervisor" },
    { employeeID: 259, supervisorID: 251, hotelAddress: "110 Broadway, Brooklyn, NY, USA", fullName: "Grace Ocean", position: "Kitchen Staff" },
    { employeeID: 260, supervisorID: 251, hotelAddress: "110 Broadway, Brooklyn, NY, USA", fullName: "Henry Cavil", position: "Kitchen Supervisor" },

    // Add more later I guess
]