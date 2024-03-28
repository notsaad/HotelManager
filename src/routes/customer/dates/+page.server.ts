import { getAllHotelRooms, getHotelChains } from "$lib/server/db";
import type { PageServerLoad } from "./$types";

export const load = (() => {
    const hotelChains = getHotelChains();
    const hotelRooms = getAllHotelRooms();

    return {
        hotelChains: hotelChains,
        hotelRooms: hotelRooms,
    };
}) satisfies PageServerLoad;