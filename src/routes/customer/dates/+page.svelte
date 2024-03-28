<script lang="ts">
    import type { PageData } from "./$types";
	import HotelCard from "./hotel_card.svelte";
    
    export let data: PageData;
    let selectedChain = ""
    
    let hotelRooms = data.hotelRooms;
    console.log(hotelRooms);
    function fetchHotels() {
        fetch(`/api/filterChains?chainName=${selectedChain.replace(" ", "%20")}`)
        .then((res) => res.json())
        .then((data) => {
            hotelRooms = data;
            console.log(data);
        });
    }


    let hotelChainOptions = [ {value: "", label:"Any"} ]
    data.hotelChains.forEach(hotelChain => {
        hotelChainOptions.push({
            value: JSON.stringify(hotelChain.chain_name, null, 2).replaceAll("\"", ""),
            label: JSON.stringify(hotelChain.chain_name, null, 2).replaceAll("\"", "")
        })
    });

    selectedChain = hotelChainOptions[0].value;


    
</script>

  <h2>Continue Booking</h2>

    <select bind:value={selectedChain} on:change={fetchHotels}>
        {#each hotelChainOptions as option}
        <option value={option.value}>
            {option.label}
        </option>
        {/each}
    </select>

    <h3>Hotel Rooms</h3>

    <div class="hotelGrid">
        {#each hotelRooms as hotelRoom}
            <HotelCard
                numStars={hotelRoom.star_rating}
                hotelAddress={hotelRoom.hotel_address}
                hotelChain={hotelRoom.chain_name}
            />
        {/each}
    </div>

    <ul>
        <li>number of guests</li>
        <li>hotel chain</li>
        <li>hotel category</li>
        <li>price</li>
        <li>area</li>
        <li>total number of rooms in hotel</li>
    </ul>

    <ul class="hotelChainDropdown">
    </ul>

    <a href="/customer/dates/confirm">
        Submit
    </a>


<style>
    .hotelGrid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 20px;
    }
</style>