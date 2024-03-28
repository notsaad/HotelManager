import { getAllHotelRooms } from "$lib/server/db";
import type { RequestHandler } from "./$types";
import { json } from "@sveltejs/kit";

export const GET = (({ url }) => {
    let chainName:string[] =  []
    chainName = url.searchParams.get("chainName")?.toString().replace("%20", " ").split(",") as unknown as string[] ?? [];

    
    const query:hotelRoomQueryOptions = {
        chainNames: chainName,
        area: url.searchParams.get("area")?.toString() ?? "",
        starRating: parseInt(url.searchParams.get("starRating")?.toString() ?? "0"),
        offset: parseInt(url.searchParams.get("offset")?.toString() ?? "0")
    }
    
    console.log(query);
    const hotelRooms = getAllHotelRooms(query) ?? [];

    return  json(hotelRooms);
}) satisfies RequestHandler;