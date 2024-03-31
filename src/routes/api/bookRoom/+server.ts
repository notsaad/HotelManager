import { bookRoom } from "$lib/server/db";
import type { bookRoomOptions } from "$lib/server/db/types";
import type { RequestHandler } from "./$types";
import { json } from "@sveltejs/kit";

export const POST: RequestHandler = async ({ request }) => {
    const {chainAddress, roomNumber, checkInDate, checkOutDate, customerID} = await request.json();

    const query:bookRoomOptions = {
        customerID: customerID,
        chainAddress: chainAddress,
        roomNumber: roomNumber,
        checkInDate: checkInDate,
        checkOutDate: checkOutDate,
    }

    bookRoom(query);
    return json({success: true});
};