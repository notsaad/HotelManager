<script lang="ts">
    import type { PageData } from "./$types";
    import "@fortawesome/fontawesome-free"
	import HotelCard from "../../../components/hotel_card.svelte";
    
    export let data: PageData;
    let selectedChain = ""
    let offset = 0;
    let area = "";
    let starCount = 0;
    let minPrice: number;
    let maxPrice: number;
    
    let hotelRooms = data.hotelRooms;
    let hotels;
    changeGrid();
    
    async function fetchHotels() {
        let res = await fetch(`/api/filterChains?chainName=${selectedChain.replace(" ", "%20")}&area=${area}&starRating=${starCount}&minPrice=${minPrice}&maxPrice=${maxPrice}`)
        let data = await res.json();
        hotelRooms = data;
        offset = 0;
        changeGrid();
    }

    const minusOffset = () => {
        offset -= 24;
        if (offset < 0) offset = 0;
        changeGrid();
    }
    const plusOffset = () => {
        console.log(hotels.length, offset)
        if (hotels.length >= offset + 24) 
        {
            offset += 24;
            changeGrid();
        }
    }

    function updateStarCount(i:number) {
        starCount = i + 1;
        fetchHotels()
    }

    let hotelChainDropDownOptions = [ {value: "", label:"Any"} ]
    data.hotelChains.forEach(hotelChain => {
        hotelChainDropDownOptions.push({
            value: JSON.stringify(hotelChain.chain_name, null, 2).replaceAll("\"", ""),
            label: JSON.stringify(hotelChain.chain_name, null, 2).replaceAll("\"", "")
        })
    });

    selectedChain = hotelChainDropDownOptions[0].value;

    function changeGrid() {
        hotels = hotelRooms.slice(offset, offset + 24);
    }
    
</script>

  <h2>Continue Booking</h2>

  <div class="filterDiv">
    <div class="filter">
        <label for="hotelChain">Hotel Chain</label>
        <select bind:value={selectedChain} on:change={fetchHotels}>
            {#each hotelChainDropDownOptions as option}
            <option value={option.value}>
                {option.label}
            </option>
            {/each}
        </select>
    </div>

    <div class="filter">
        <label for="area">Area</label>
        <input type="text" bind:value={area} placeholder="Area" on:input={fetchHotels}/>
    </div>
    
    <div class="fiter">
        <label for="price">Price (min, max)</label>
        <input type="number" bind:value={minPrice} placeholder="Min Price" on:input={fetchHotels}/>
        <input type="number" bind:value={maxPrice} placeholder="Max Price" on:input={fetchHotels}/>
    </div>
    <div class="filter">
        <label for="starRating">Rating</label>
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
    </div>
  </div>


    <h3>Hotel Rooms</h3>

    <div class="hotelGrid">
        {#each hotels as hotel}
            <HotelCard
                numStars={hotel.star_rating}
                hotelArea={hotel.area}
                hotelAddress={hotel.hotel_address}
                hotelChain={hotel.chain_name}
                minPrice={hotel.min_price}
                maxPrice={hotel.max_price}
                minCapacity={hotel.min_capacity}
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
        grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
        gap: 10px;
    }

    .filterDiv {
        display: flex;
        justify-content: space-between;
        
        max-width: 1500px;
    }

    .filter {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    input {
        padding: 10px;
    }

    select {
        padding: 10px;
    }

    .star {
        background: none;
        border: none;
    }

    .star:hover{
        cursor: pointer;
    }
</style>