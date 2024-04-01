import {getAllCustomers} from '$lib/server/db/index.js';

export const load = () => {
    
    const customers = getAllCustomers();
    
    return {customers};
}