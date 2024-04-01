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

</script>

<div>
    <h1>Update Hotel Info</h1>
    <input type="text" bind:value={hotelAddress} placeholder="Hotel Address"/>
    <input type="text" bind:value={centralOfficeAddress} placeholder="Central Office Address"/>
    <input type="text" bind:value={area} placeholder="Area"/>
    <input type="number" bind:value={starRating} placeholder="Star Rating"/>
    <input type="number" bind:value={numRooms} placeholder="Number of Rooms"/>
    <input type="text" bind:value={contactInfo} placeholder="Contact Info"/>
    <button on:click={updateHotelInfo}>Update Info</button>
</div>