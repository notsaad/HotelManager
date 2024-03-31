import { insertCustomer } from "$lib/server/db";
import type { Customer } from "$lib/server/db/types";
import type { RequestHandler } from "./$types";
import { error, json } from "@sveltejs/kit";

export const POST:RequestHandler = async ({ request }) => {
    const date = new Date();

    const { fullname, customerId, address } = await request.json();

    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = date.getFullYear();

    const today = `${yyyy}-${mm}-${dd}`;

    const customer: Customer = {
        customerID: customerId,
        fullName: fullname,
        address: address,
        systemRegistrationDate: today
    }

    if (customerId === null || fullname === null) {
        return json({ status: 400, body: { message: "Invalid input" } });
    }

    const response = insertCustomer(customer);

    if (response === 'exists' || response === 'success') {
        if (response === 'exists') {
            throw error(409, "customer already exists");
        }
        return json({success: true});
    } else {
        throw error(500, "Failed to insert customer");
    }

};