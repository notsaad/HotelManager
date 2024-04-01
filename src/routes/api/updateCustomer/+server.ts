import { updateCustomer } from "$lib/server/db";
import { error, json } from "@sveltejs/kit";

export const GET = (({ url }) => {
    const id = parseInt(url.searchParams.get("id")?.toString() ?? "");
    const fullName = url.searchParams.get("fullName")?.toString() ?? "";
    const address = url.searchParams.get("address")?.toString() ?? "";

    const res = updateCustomer(id, fullName, address);
    if (!res) {
        return error(409, "Failed to update customer");
    }
    return json({success: true});
});