import { getHotelChains, loadDatabase } from "$lib/server/db";
// import { type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load = (() => {
    const hotelChains = getHotelChains();

    return {hotelChains};
}) satisfies PageServerLoad;

export const actions: Actions = {
    temp: async () => {
        loadDatabase();
    },
}