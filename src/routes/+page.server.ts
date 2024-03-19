import { getSampleReturn, loadDatabases } from "$lib/server/db";
// import { type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load = (() => {
    const hotelChains = getSampleReturn();

    return {hotelChains};
}) satisfies PageServerLoad;

export const actions: Actions = {
    temp: async () => {
        loadDatabases();
    },
}