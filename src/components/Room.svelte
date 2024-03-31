<script lang="ts">
    import '@fortawesome/fontawesome-free/css/all.css';
    import hotelRoom from "$lib/assets/hotelRoom.jpg"
    import { myStore } from '../routes/customer/myStore.js';
    import { customerStore, beginDateStore, endDateStore } from '../routes/customer/customerStore.js';

    export let price: number;
    export let view: string;
    export let capacity: number;
    export let amenities: string;
    export let roomNumber: number;
    export let hotelAddress: string;
    
    const id = parseInt($customerStore);
    const length = $myStore;

    const beginDate = $beginDateStore;
    const endDate = $endDateStore;

    async function bookHotel() {
        let url = '/customer/dates/confirm/'

        const query:bookRoomOptions = {
            customerID: id,
            chainAddress: hotelAddress,
            roomNumber: roomNumber,
            checkInDate: beginDate,
            checkOutDate: endDate,
        }

        let res = await fetch('/api/bookRoom',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(query)
        })
        // window.location.href = url;
    }
</script>

<div class="hotel-card" style="background-image: url({hotelRoom});">
    <div class="hotel-container">
        <div class="hotel-info">
            <div class="left">
                <h2>{view}</h2>
                <div class="capacity">
                    <h4 class="subtitle">Capacity: {capacity}</h4>
                    <i class="fa-solid fa-users"></i>
                </div>
                <div class="amenities">
                    <h4 class="subtitle amenities">{amenities}</h4>
                </div>
            </div>
            <div class="right">
                <h4 class="price">${price}<span class="pernight">/night</span></h4>
                <h4 class="price">{length} Night Stay</h4>
                <button on:click={bookHotel}>Book ${length * price}</button>
            </div>
        </div>
    </div>
</div>

<style>

    h2 {
        margin-bottom: 5px;
    }

    .amenities {
        text-overflow: ellipsis;
    }

    .subtitle {
        margin: 0 0 10px 0;
        color: lightgray;
    }

    .hotel-card {
        border: 1px solid #ccc;
        margin: 10px;
        align-items: center;
        min-height: 300px; 
        border-radius: 8px;
        box-shadow: 0 3px 6px rgba(0,0,0,0.5);
        position: relative; /* Make container relative for positioning */
        overflow: hidden;
        background-size: cover;
        background-position: center;
    }

    .hotel-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%; 
        background-image: linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.8)); 
    }

    .hotel-container {
        box-sizing: border-box;
        position: absolute;
        bottom: 10px;
        align-items: center;
        width: 100%;
        padding: 5px 20px;
        margin: auto;
    }

    .hotel-info {
        position: relative;
        z-index: 2;
        color: white;
        margin-top: auto;
        width: 100%;
    }

    .amenities {
        width: 200px;
        text-overflow: ellipsis;
    }

    .right {
        display: inline-block;
        margin-left: auto;
    }

    .left {
        max-width: 200px;
        text-overflow: ellipsis;
        display: inline-block;
    }

    .pernight {
        color: lightgray;
    }

    .capacity {
        display: inline-flex;
        gap: 12px;
    }

    button {
        padding: 8px 12px;
        border-radius: 5px;
        background-color: #007bff;
        color: white;
        border: none;
        cursor: pointer;
        z-index: 2;
        position: relative;
        display: inline;
        margin-left: auto;
        margin-bottom: 0;
        font-weight: bold;
        font-size: 20px;
    }

    button:hover {
        background-color: #0056b3;
    }
</style>
