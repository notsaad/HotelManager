<script lang="ts">
    import type { PageData } from "./$types";
    import "@fortawesome/fontawesome-free"
	import HotelCard from "../../../components/hotel_card.svelte";
    
    export let data: PageData;
    let selectedChain = ""
    let offset = 0;
    let area = "";
    let starCount = 0;
    
    let hotelRooms = data.hotelRooms;

    async function fetchHotels() {
        let res = await fetch(`/api/filterChains?chainName=${selectedChain.replace(" ", "%20")}&offset=${offset}&area=${area}&starRating=${starCount}`)
        let data = await res.json();
        hotelRooms = data;
    }

    const minusOffset = () => {
        offset -= 18;
        if (offset < 0) offset = 0;
        fetchHotels();
    }
    const plusOffset = () => {
        offset += 18;
        fetchHotels();

        if (hotelRooms.length < 18) 
        {
            offset -= 18;
            fetchHotels();
        }
    }

    function updateStarCount(i:number) {
        starCount = i + 1;
        fetchHotels()
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

    <input type="text" bind:value={area} placeholder="Area" on:input={fetchHotels}/>

    <div>
        {#each Array(5) as _, i}
            {#if i < starCount}
                <button class="fa-solid fa-star star fa-2x" style="color: #FFD43B;" on:click={() => updateStarCount(i)}></button>
            {/if}
            {#if i >= starCount}
                <button class="fa-regular fa-star star fa-2x" style="color: #FFD43B;" on:click={() => updateStarCount(i)}></button>
            {/if}
        {/each}
    </div>

    <h3>Hotel Rooms</h3>

    <div class="hotelGrid">
        {#each hotelRooms as hotelRoom}
            <HotelCard
                numStars={hotelRoom.star_rating}
                hotelArea={hotelRoom.area}
                hotelAddress={hotelRoom.hotel_address}
                hotelChain={hotelRoom.chain_name}
            />
        {/each}
    </div>

    <div>
        <button on:click={minusOffset}>Back</button>
        <button on:click={plusOffset}>Next</button>
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
        grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
        gap: 10px;
    }

    .star {
        background: none;
        border: none;
    }

    .star:hover{
        cursor: pointer;
    }
</style>