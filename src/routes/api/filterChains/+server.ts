import { getAllHotelRooms } from "$lib/server/db";
import type { RequestHandler } from "./$types";
import { json } from "@sveltejs/kit";

export const GET = (({ url }) => {
    console.log("url: ", url);
    const chainName = url.searchParams.get("chainName")?.toString().replace("%20", " ");
    console.log("chainName: ", chainName);

    const hotelRooms = getAllHotelRooms(chainName) ?? [];

    return  json(hotelRooms);
}) satisfies RequestHandler;