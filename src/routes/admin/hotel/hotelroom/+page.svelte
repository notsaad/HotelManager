<script lang="ts">
    // hotelAddress: string, roomNumber: number, capacity: number, viewType: string, extendability: boolean, price: number, damages: string, amenities: string
    let hotelAddress: string | null | undefined = null;
    let roomNumber: number | null | undefined = null;
    let capacity: number | null | undefined = null;
    let viewType: string | null | undefined = null;
    let extendability: boolean | null | undefined = null;
    let price: number | null | undefined = null;
    let damages: string | null | undefined = null;
    let amenities: string | null | undefined = null;
    
    async function updateHotelRoomInfo() {
        if (!hotelAddress || !roomNumber || !capacity || !viewType || !extendability || !price || !damages || !amenities) {
            alert('Please fill out all fields');
            return;
        }

        let res = await fetch(`/api/updateHotelRoom?hotelAddress=${hotelAddress.replaceAll(" ", "%20")}&roomNumber=${roomNumber}&capacity=${capacity}&viewType=${viewType.replaceAll(" ", "%20")}&extendability=${extendability}&price=${price}&damages=${damages}&amenities=${amenities.replaceAll(" ", "%20")}`)
        let data = await res.json();

        if (data.error) {
            alert('Hotelroom info was not updated successfully');
            return;
        }
    }

    export let data;

</script>

<div>
    <h1>Update Hotel Room Info</h1>
    <input type="text" bind:value={hotelAddress} placeholder="Hotel Address"/>
    <input type="number" bind:value={roomNumber} placeholder="Room Number"/>
    <input type="number" bind:value={capacity} placeholder="Capacity"/>
    <input type="text" bind:value={viewType} placeholder="View Type"/>
    <label for="extendability">Extendability</label>
    <input type="checkbox" bind:checked={extendability} placeholder="Extendability"/>
    <input type="number" bind:value={price} placeholder="Price"/>
    <input type="text" bind:value={damages} placeholder="Damages"/>
    <input type="text" bind:value={amenities} placeholder="Amenities"/>
    <button on:click={updateHotelRoomInfo}>Update Info</button>
</div>

<div>
    <h1>Hotel Rooms (reload page to see changes)</h1>
    <table>
        <tr>
            <th>Address</th>
            <th>Room Number</th>
            <th>Capacity</th>
            <th>View Type</th>
            <th>Extendability</th>
            <th>Price</th>
            <th>Damages</th>
            <th>Amenities</th>
        </tr>
        {#each data.rooms as room}
        <tr>
            <td>{room.hotel_address}</td>
            <td>{room.room_number}</td>
            <td>{room.capacity}</td>
            <td>{room.view_type}</td>
            <td>{room.extendability}</td>
            <td>{room.price}</td>
            <td>{room.damages}</td>
            <td>{room.amenities}</td>
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
</style>