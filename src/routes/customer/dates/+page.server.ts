import { getAllHotels, getHotelChains } from "$lib/server/db";
import type { PageServerLoad } from "./$types";

export const load = (() => {
    const hotelChains = getHotelChains();
    const hotelRooms = getAllHotels();

    return {
        hotelChains: hotelChains,
        hotelRooms: hotelRooms,
    };
}) satisfies PageServerLoad;