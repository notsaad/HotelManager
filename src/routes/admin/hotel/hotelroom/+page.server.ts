import { getAllRooms } from '$lib/server/db/index.js';

export const load = () => {

    const rooms = getAllRooms();

    return {rooms};
};