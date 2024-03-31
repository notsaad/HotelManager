import { writable } from 'svelte/store';

export const customerStore = writable(0); // Default value
export const beginDateStore = writable(""); // Default value
export const endDateStore = writable(""); // Default value


// Check for browser environment 
if (typeof window !== 'undefined') {
    const storedId = localStorage.getItem("id");
    if (storedId) {
        customerStore.set(storedId); // Load from localStorage if available
    }

    customerStore.subscribe((value) => {
        localStorage.setItem("id", value); // Update localStorage on changes
    });

    const beginDate = localStorage.getItem("beginDate");
    if (beginDate) {
        beginDateStore.set(beginDate); // Load from localStorage if available
    }

    beginDateStore.subscribe((value) => {
        localStorage.setItem("beginDate", value); // Update localStorage on changes
    });

    const endDate = localStorage.getItem("endDate");
    if (endDate) {
        endDateStore.set(endDate); // Load from localStorage if available
    }

    endDateStore.subscribe((value) => {
        localStorage.setItem("endDate", value); // Update localStorage on changes
    });
}
