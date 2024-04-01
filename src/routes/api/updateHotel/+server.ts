import { updateHotel } from "$lib/server/db";
import { error, json } from "@sveltejs/kit";

export const GET = (({ url }) => {
    const hotelAddress = url.searchParams.get("hotelAddress")?.toString().replace("%20", " ") ?? "";
    const centralOfficeAddress = url.searchParams.get("centralOfficeAddress")?.toString().replace("%20", " ") ?? "";
    const area = url.searchParams.get("area")?.toString().replace("%20", " ") ?? "";
    const starRating = parseInt(url.searchParams.get("starRating")?.toString().replace("%20", " ") ?? "0");
    const numRooms = parseInt(url.searchParams.get("numRooms")?.toString().replace("%20", " ") ?? "0");
    const contactInfo = url.searchParams.get("contactInfo")?.toString().replace("%20", " ") ?? "";

    const res = updateHotel(hotelAddress, centralOfficeAddress, area, starRating, numRooms, contactInfo);

    if (!res) {
        return error(409, "Failed to update hotel");
    }

    return json({status: "success"});
})