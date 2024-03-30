import { getHotelRooms } from '$lib/server/db/index.js';

export const load = ({ params }) => {

    const optionMap = new Map();
    for(const option of params.options.split("&")) {
        const [key, value] = option.split("=");
        optionMap.set(key, value);
    }

    const rooms = getHotelRooms(params.hotel, optionMap.get("minPrice"), optionMap.get("maxPrice"), optionMap.get("minCapacity"));

    return {rooms};
};