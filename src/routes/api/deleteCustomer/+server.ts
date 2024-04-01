import { deleteCustomer } from "$lib/server/db";
import { json, type RequestHandler } from "@sveltejs/kit";

export const GET = (({ url }) => {
    const customerID = parseInt(url.searchParams.get("customerId")?.toString() ?? "");

    deleteCustomer(customerID);
    return json({success: true});

}) satisfies RequestHandler;