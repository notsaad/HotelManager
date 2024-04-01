import { getAllHotels } from "$lib/server/db";

export const load = () => {
    const hotels = getAllHotels();

    return {hotels};
}