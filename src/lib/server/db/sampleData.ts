
export const Hotel_Chains = [
    {Central_Office_Address: '123 Main St, New York, NY, USA', Num_Hotels: 12, Contact_Info: 'info@chain1.com'},
    {Central_Office_Address: '55 Elm Blvd, Los Angeles, CA, USA', Num_Hotels: 10, Contact_Info: 'support@chain2.com'},
    {Central_Office_Address: '78 Queen St, Toronto, ON, Canada', Num_Hotels: 8, Contact_Info: 'contact@chain3.ca'},
    {Central_Office_Address: '22 Rue de Paris, Paris, France', Num_Hotels: 9, Contact_Info: 'info@chain4.fr'},
    {Central_Office_Address: '10 Akasaka, Tokyo, Japan', Num_Hotels: 15, Contact_Info: 'contact@chain5.jp'}
];

export const supervisors = [
    {Supervisor_ID: 1, Hotel_Chain: '123 Main St, New York, NY, USA', Full_Name: 'John Smith', SIN: 123456789},
    {Supervisor_ID: 2, Hotel_Chain: '123 Main St, New York, NY, USA', Full_Name: 'Jane Doe', SIN: 987654321},
    {Supervisor_ID: 3, Hotel_Chain: '55 Elm Blvd, Los Angeles, CA, USA', Full_Name: 'Mark Wilson', SIN: 444888222},
    {Supervisor_ID: 4, Hotel_Chain: '55 Elm Blvd, Los Angeles, CA, USA', Full_Name: 'Linda Brown', SIN: 555999333},
    {Supervisor_ID: 5, Hotel_Chain: '78 Queen St, Toronto, ON, Canada', Full_Name: 'James Johnson', SIN: 111222333},
    {Supervisor_ID: 6, Hotel_Chain: '78 Queen St, Toronto, ON, Canada', Full_Name: 'Emma Green', SIN: 444555666},
    {Supervisor_ID: 7, Hotel_Chain: '22 Rue de Paris, Paris, France', Full_Name: 'Daniel White', SIN: 777888999},
    {Supervisor_ID: 8, Hotel_Chain: '22 Rue de Paris, Paris, France', Full_Name: 'Sophia Black', SIN: 222333444},
    {Supervisor_ID: 9, Hotel_Chain: '10 Akasaka, Tokyo, Japan', Full_Name: 'Noah Johnson', SIN: 666777888},
    {Supervisor_ID: 10, Hotel_Chain: '10 Akasaka, Tokyo, Japan', Full_Name: 'Ava Brown', SIN: 999000111}
    // ... Add more supervisors, ensuring Hotel_Chain values match existing ones
];

export const hotels = [
    // Chain 1 - New York
    { Hotel_Address: '110 Times Square, New York, NY, USA', Supervisor_ID: 1, Star_Rating: 5, Num_Rooms: 120, Contact_Info: 'nyhotel3@chain1.com' },
    { Hotel_Address: '33 Wall St, New York, NY, USA', Supervisor_ID: 2, Star_Rating: 4, Num_Rooms: 80, Contact_Info: 'nyhotel4@chain1.com' },
    { Hotel_Address: '350 5th Avenue, New York, NY, USA', Supervisor_ID: 2, Star_Rating: 5, Num_Rooms: 95, Contact_Info: 'nyhotel5@chain1.com' },
    { Hotel_Address: '75 Central Park West, New York, NY, USA', Supervisor_ID: 1, Star_Rating: 4, Num_Rooms: 65, Contact_Info: 'nyhotel6@chain1.com' },

    // Chain 2 - Los Angeles
    { Hotel_Address: '800 Hollywood Blvd, Los Angeles, CA, USA', Supervisor_ID: 3, Star_Rating: 4, Num_Rooms: 70, Contact_Info: 'lahotel2@chain2.com' },
    { Hotel_Address: '123 Beach Ave, Santa Monica, CA, USA', Supervisor_ID: 3, Star_Rating: 4, Num_Rooms: 60, Contact_Info: 'lahotel3@chain2.com' },
    { Hotel_Address: '700 Beverly Blvd, Beverly Hills, CA, USA', Supervisor_ID: 4, Star_Rating: 5, Num_Rooms: 90, Contact_Info: 'lahotel4@chain2.com' },

    // Chain 3 - Toronto
    { Hotel_Address: '50 York St, Toronto, ON, Canada', Supervisor_ID: 5, Star_Rating: 5, Num_Rooms: 100, Contact_Info: 'tohotel1@chain3.ca' },
    { Hotel_Address: '250 Front St, Toronto, ON, Canada', Supervisor_ID: 5, Star_Rating: 4, Num_Rooms: 70, Contact_Info: 'tohotel2@chain3.ca' },
    { Hotel_Address: '88 Bloor St, Toronto, ON, Canada', Supervisor_ID: 6, Star_Rating: 3, Num_Rooms: 45, Contact_Info: 'tohotel3@chain3.ca' },

    // Chain 4 - Paris
    { Hotel_Address: '3 Rue de Rivoli, Paris, France', Supervisor_ID: 7, Star_Rating: 5, Num_Rooms: 85, Contact_Info: 'parhotel1@chain4.fr' },
    { Hotel_Address: '80 Avenue Champs-Élysées, Paris, France', Supervisor_ID: 7, Star_Rating: 5, Num_Rooms: 110, Contact_Info: 'parhotel2@chain4.fr' },
    { Hotel_Address: '35 Rue Saint-Honoré, Paris, France', Supervisor_ID: 8, Star_Rating: 4, Num_Rooms: 60, Contact_Info: 'parhotel3@chain4.fr' },

    // Chain 5 - Tokyo
    { Hotel_Address: '3-2 Shinjuku, Tokyo, Japan', Supervisor_ID: 9, Star_Rating: 4, Num_Rooms: 75, Contact_Info: 'tyohotel1@chain5.jp' },
    { Hotel_Address: '8-1 Ginza, Tokyo, Japan', Supervisor_ID: 9, Star_Rating: 5, Num_Rooms: 130, Contact_Info: 'tyohotel2@chain5.jp' },
    { Hotel_Address: '20 Roppongi, Tokyo, Japan', Supervisor_ID: 10, Star_Rating: 3, Num_Rooms: 50, Contact_Info: 'tyohotel3@chain5.jp' } 
];

export const employees = [
    // -- New York Chain -- //
    // New York Hotel 1 Employees
    {SIN: 555987123, Hotel_Address: '110 Times Square, New York, NY, USA', Full_Name: 'Emily Johnson', Position: 'Receptionist'},

    // New York Hotel 2 Employees
    {SIN: 777333666, Hotel_Address: '33 Wall St, New York, NY, USA', Full_Name: 'Alex Brown', Position: 'Manager'},

    //  New York Hotel 3 Employees
    {SIN: 222333444, Hotel_Address: '350 5th Avenue, New York, NY, USA', Full_Name: 'Sarah White', Position: 'Receptionist'},

    // New York Hotel 4 Employees
    {SIN: 111222333, Hotel_Address: '75 Central Park West, New York, NY, USA', Full_Name: 'Mike Black', Position: 'Manager'},

    // -- Los Angeles Chain -- //
    // Los Angeles Hotel 1 Employees
    {SIN: 444555666, Hotel_Address: '800 Hollywood Blvd, Los Angeles, CA, USA', Full_Name: 'Jessica Green', Position: 'Receptionist'},

    // Los Angeles Hotel 2 Employees
    {SIN: 888999000, Hotel_Address: '123 Beach Ave, Santa Monica, CA, USA', Full_Name: 'David Brown', Position: 'Manager'},

    // Los Angeles Hotel 3 Employees
    {SIN: 111222333, Hotel_Address: '700 Beverly Blvd, Beverly Hills, CA, USA', Full_Name: 'Linda White', Position: 'Receptionist'},

    // -- Toronto Chain -- //
    // Toronto Hotel 1 Employees
    {SIN: 333444555, Hotel_Address: '50 York St, Toronto, ON, Canada', Full_Name: 'James Black', Position: 'Manager'},

    // Toronto Hotel 2 Employees
    {SIN: 999000111, Hotel_Address: '250 Front St, Toronto, ON, Canada', Full_Name: 'Emma Green', Position: 'Receptionist'},

    // Toronto Hotel 3 Employees
    {SIN: 666777888, Hotel_Address: '88 Bloor St, Toronto, ON, Canada', Full_Name: 'Olivia Johnson', Position: 'Manager'},

    // -- Paris Chain -- //
    // Paris Hotel 1 Employees
    {SIN: 222333444, Hotel_Address: '3 Rue de Rivoli, Paris, France', Full_Name: 'Sophia Brown', Position: 'Receptionist'},

    // Paris Hotel 2 Employees
    {SIN: 555666777, Hotel_Address: '80 Avenue Champs-Élysées, Paris, France', Full_Name: 'Daniel White', Position: 'Manager'},

    // Paris Hotel 3 Employees
    {SIN: 999000111, Hotel_Address: '35 Rue Saint-Honoré, Paris, France', Full_Name: 'Ava Green', Position: 'Receptionist'},

    // -- Tokyo Chain -- //
    // Tokyo Hotel 1 Employees
    {SIN: 444555666, Hotel_Address: '3-2 Shinjuku, Tokyo, Japan', Full_Name: 'Ethan Black', Position: 'Manager'},

    // Tokyo Hotel 2 Employees
    {SIN: 777888999, Hotel_Address: '8-1 Ginza, Tokyo, Japan', Full_Name: 'Mia Johnson', Position: 'Receptionist'},

    // Tokyo Hotel 3 Employees
    {SIN: 222333444, Hotel_Address: '20 Roppongi, Tokyo, Japan', Full_Name: 'Noah White', Position: 'Manager'}
];

export const hotelRooms = [
    {Hotel_Address: '110 Times Square, New York, NY, USA', Room_Number: '101', Capacity: 2, View_Type: 'City', Extendability: 'Yes', Price: 150.00, Damages: 'None', Amenities: 'TV, AC, Minibar'},
    {Hotel_Address: '110 Times Square, New York, NY, USA', Room_Number: '205', Capacity: 4, View_Type: 'City', Extendability: 'No', Price: 220.00, Damages: 'Broken lamp', Amenities: 'TV, AC, Balcony'},
    // ... Add rooms for all hotels (at least 5 per hotel)
];

export const customers = [
    {Customer_ID: 1, Full_Name: 'Alice Parker', Address: '123 Elm St, NY, USA', System_Registration_Date: '2024-01-12'},
    {Customer_ID: 2, Full_Name: 'Bob Johnson', Address: '456 Main St, LA', System_Registration_Date: '2023-12-20'},
    // ... Add more 
];

export const reservations = [
    {Customer_ID: 1, Hotel_Address: '110 Times Square, New York, NY, USA', Room_Number: '101', Check_In_Date: '2024-01-25', Check_Out_Date: '2024-01-29', Total_Price: 600.00},
    // ... Add a few, ensuring customers and rooms exist 
];
