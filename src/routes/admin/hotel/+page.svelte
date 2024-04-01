<script lang="ts">
    // hotelAddress: string, centralOfficeAddress: string, area: string, starRating: number, numRooms: number, contactInfo: string
    let hotelAddress: string | null | undefined = null;
    let centralOfficeAddress: string | null | undefined = null;
    let area: string | null | undefined = null;
    let starRating: number | null | undefined = null;
    let numRooms: number | null | undefined = null;
    let contactInfo: string | null | undefined = null;

    async function updateHotelInfo() {
        if (!hotelAddress || !centralOfficeAddress || !area || !starRating || !numRooms || !contactInfo) {
            alert('Please fill out all fields');
            return;
        }

        let res = await fetch(`/api/updateHotel?hotelAddress=${hotelAddress.replaceAll(" ", "%20")}&centralOfficeAddress=${centralOfficeAddress.replaceAll(" ", "%20")}&area=${area.replaceAll(" ", "%20")}&starRating=${starRating}&numRooms=${numRooms}&contactInfo=${contactInfo.replaceAll(" ", "%20")}`)
        let data = await res.json();

        if (data.error) {
            alert('Hotel info was not updated successfully');
            return;
        }
    }

    export let data;

</script>

<div class="form">
    <h1>Update Hotel Info</h1>
    <input type="text" bind:value={hotelAddress} placeholder="Hotel Address"/>
    <input type="text" bind:value={centralOfficeAddress} placeholder="Central Office Address"/>
    <input type="text" bind:value={area} placeholder="Area"/>
    <input type="number" bind:value={starRating} placeholder="Star Rating"/>
    <input type="number" bind:value={numRooms} placeholder="Number of Rooms"/>
    <input type="text" bind:value={contactInfo} placeholder="Contact Info"/>
    <button on:click={updateHotelInfo} data-sveltekit-reload>Update Info</button>
</div>

<div>
    <h1>Hotels (reload page to see changes)</h1>
    <table>
        <tr>
            <th>Address</th>
            <th>Central Office Address</th>
            <th>Area</th>
            <th>Star Rating</th>
            <th>Number of Rooms</th>
            <th>Contact Info</th>
        </tr>
        {#each data.hotels as hotel}
        <tr>
            <td>{hotel.hotel_address}</td>
            <td>{hotel.central_office_address}</td>
            <td>{hotel.area}</td>
            <td>{hotel.star_rating}</td>
            <td>{hotel.num_rooms}</td>
            <td>{hotel.contact_info}</td>
        </tr>
        {/each}
    </table>
</div>

<style>
    table {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
    }
    th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #04AA6D;
        color: white;
    }
    tr:hover {background-color: #ddd;}
    tr:nth-child(even){background-color: #f2f2f2;}

    td, th {
        border: 1px solid #ddd;
        padding: 8px;
    }
    /* General container styling */
.form {
    text-align: center; /* Centers form elements */
    margin: 20px auto;  /* Adds margin for visual spacing */
    padding: 20px;
    width: 550px;       /* Increased width  */
    border: 1px solid #ddd; 
    border-radius: 5px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow effect */
}

/* Style the heading */
h1 {
    margin-bottom: 20px; /* Space between heading and inputs */
}

/* Style the input fields */
input[type="number"], input[type="text"] {
    width: calc(100% - 22px); /* Takes up container width, minus padding */
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

/* Style the button */
button {
    background-color: #4CAF50; /* Example button color */
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;        
}

button:hover {
    background-color: #3e8e41; /* Darker color on hover */
}

</style>