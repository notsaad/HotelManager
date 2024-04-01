import { updateHotelRoom } from '$lib/server/db/index.js';
import { error, json } from '@sveltejs/kit';

export const GET = (({url}) => {
    const hotelAddress = url.searchParams.get("hotelAddress")?.toString().replace("%20", " ") ?? "";
    const roomNumber = parseInt(url.searchParams.get("roomNumber")?.toString().replace("%20", " ") ?? "0");
    const capacity = parseInt(url.searchParams.get("capacity")?.toString().replace("%20", " ") ?? "0");
    const viewType = url.searchParams.get("viewType")?.toString().replace("%20", " ") ?? "";
    const extendability = url.searchParams.get("extendability")?.toString() === "true";
    const price = parseInt(url.searchParams.get("price")?.toString().replace("%20", " ") ?? "0");
    const damages = url.searchParams.get("damages")?.toString().replace("%20", " ") ?? "";
    const amenities = url.searchParams.get("amenities")?.toString().replace("%20", " ") ?? "";

    const res = updateHotelRoom(hotelAddress, roomNumber, capacity, viewType, extendability, price, damages, amenities);

    if (!res) {
        return error(409, "Failed to update hotel room");
    }

    return json({status: "success"});
})