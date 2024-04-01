import { getReservationsForRoom, insertReservation } from "$lib/server/db";
import type { Reservation } from "$lib/server/db/types";
import type { RequestHandler } from "./$types";
import { error, json } from "@sveltejs/kit";

export const POST: RequestHandler = async ({ request }) => {
    const { chainAddress, roomNumber, checkInDate, checkOutDate, customerID } = await request.json();

    const query:Reservation = {
        customerID: customerID,
        hotelAddress: chainAddress,
        roomNumber: roomNumber,
        checkInDate: checkInDate,
        checkOutDate: checkOutDate,
    }

    let res = insertReservation(query);

    if (res === false) {
        error(409, "Booking is not unique");
    }

    return json({success: true});
};

export const GET: RequestHandler = async ({ url }) => {
    const hotelAddress = url.searchParams.get("hotelAddress")?.toString().replaceAll("%20", " ") ?? "";
    const roomNumber = parseInt(url.searchParams.get("roomNumber")?.toString() ?? "0");
    const startDateStr = url.searchParams.get("startDate")?.toString() ?? "";
    const endDateStr = url.searchParams.get("endDate")?.toString() ?? "";


    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);

    const data = getReservationsForRoom(hotelAddress, roomNumber);

    for (const reservation of data) {
        const checkInDate = new Date(reservation.check_in_date);
        const checkOutDate = new Date(reservation.check_out_date);

        if ((startDate < checkOutDate && startDate > checkInDate) || (endDate > checkInDate && endDate < checkOutDate) || ( checkInDate >= startDate && checkOutDate <= endDate)) {
            return error(409, "Room is already booked for the selected dates");
        }
    }

    return json({success: true})
}