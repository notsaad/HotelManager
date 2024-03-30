import { getAllHotelRooms, getHotelChains } from "$lib/server/db";
import type { PageServerLoad } from "./$types";

export const load = (() => {
    const hotelChains = getHotelChains();
    const hotelRooms = getAllHotelRooms();

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

    return {
        hotelChains: hotelChains,
        hotelRooms: hotels,
    };
}) satisfies PageServerLoad;