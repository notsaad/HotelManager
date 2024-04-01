import { getTotalCapacity } from '$lib/server/db/index.js';
import { json } from '@sveltejs/kit';

export const GET = (({ url }) => {
    const hotelAddress = url.searchParams.get("hotelAddress")?.toString().replace("%20", " ") ?? "";
    
    const totalCapacity = getTotalCapacity(hotelAddress).capacity ?? 0;
    return json({totalCapacity});
});