import { getAllHotelRooms } from "$lib/server/db";
import type { hotelRoomQueryOptions } from "$lib/server/db/types";
import type { RequestHandler } from "./$types";
import { json } from "@sveltejs/kit";

export const GET = (({ url }) => {
    let chainName:string[] =  []
    chainName = url.searchParams.get("chainName")?.toString().replace("%20", " ").split(",") as unknown as string[] ?? [];
    
    const query:hotelRoomQueryOptions = {
        chainNames: chainName,
        area: url.searchParams.get("area")?.toString() ?? "",
        starRating: parseInt(url.searchParams.get("starRating")?.toString() ?? "0"),
        minPrice: Math.abs(parseInt(url.searchParams.get("minPrice")?.toString() ?? "0")),
        maxPrice: Math.abs(parseInt(url.searchParams.get("maxPrice")?.toString() ?? "0")),
        minCapacity: Math.abs(parseInt(url.searchParams.get("minCapacity")?.toString() ?? "0")),
    }
    
    const hotelRooms = getAllHotelRooms(query) ?? [];

    const hotelMap = new Map();

    for (let i = 0; i < hotelRooms.length; i++) {
        if (!hotelMap.has(hotelRooms[i].hotel_address)) {
            hotelMap.set(hotelRooms[i].hotel_address, {
                "chain_name": hotelRooms[i].chain_name,
                "hotel_address": hotelRooms[i].hotel_address,
                "area": hotelRooms[i].area,
                "star_rating": hotelRooms[i].star_rating,
                "min_capacity": hotelRooms[i].capacity,
                "max_capacity": hotelRooms[i].capacity,
                "min_price": hotelRooms[i].price,
                "max_price": hotelRooms[i].price,
            });
        } else {
            hotelMap.get(hotelRooms[i].hotel_address).min_capacity = Math.min(hotelMap.get(hotelRooms[i].hotel_address).min_capacity, hotelRooms[i].capacity);
            hotelMap.get(hotelRooms[i].hotel_address).max_capacity = Math.max(hotelMap.get(hotelRooms[i].hotel_address).max_capacity, hotelRooms[i].capacity);
            hotelMap.get(hotelRooms[i].hotel_address).min_price = Math.min(hotelMap.get(hotelRooms[i].hotel_address).min_price, hotelRooms[i].price);
            hotelMap.get(hotelRooms[i].hotel_address).max_price = Math.max(hotelMap.get(hotelRooms[i].hotel_address).max_price, hotelRooms[i].price);
        }
    }

    const hotels = Array.from(hotelMap.values());

    return  json(hotels);
}) satisfies RequestHandler;