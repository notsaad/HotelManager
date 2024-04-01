<script lang="ts">
    import type { PageData } from "./$types";
    import "@fortawesome/fontawesome-free"
	import HotelCard from "../../../components/Hotel.svelte";
    
    export let data: PageData;
    let offset = 0;
    let area = "";
    let starCount = 0;
    let minPrice: number;
    let maxPrice: number;
    let minCapacity: number;
    
    let hotelRooms = data.hotelRooms;
    let hotels;
    let selectedChains:string[] = [];
    changeGrid();

    async function fetchHotels() {
        let selectedChain = "";
        if (selectedChains.length > 0) {
            selectedChain = selectedChains.join(",");
        }
        let res = await fetch(`/api/filterChains?chainName=${selectedChain.replaceAll(" ", "%20")}&area=${area}&starRating=${starCount}&minPrice=${minPrice}&maxPrice=${maxPrice}&minCapacity=${minCapacity}`)
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

    let hotelChainDropDownOptions:string[] = []
    data.hotelChains.forEach(hotelChain => {
        hotelChainDropDownOptions.push(hotelChain.chain_name)
    });



    function changeGrid() {
        hotels = hotelRooms.slice(offset, offset + 24);
    }
    
</script>

  <h2>Continue Booking</h2>

  <div class="filters">

    <div class="filterDiv">
        <div class="filter">
            <input type="text" bind:value={area} placeholder="Area" on:input={fetchHotels}/>
        </div>
        
        <div class="fiter">
            <input class="price" type="number" bind:value={minPrice} placeholder="Min Price" on:input={fetchHotels}/>
            <input class="price" type="number" bind:value={maxPrice} placeholder="Max Price" on:input={fetchHotels}/>
        </div>
        <div class="filter">
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
    <div class="filterDiv">
        <div class="filter">
            {#each hotelChainDropDownOptions as option}
                    <input class="checkbox" id={option} type="checkbox" bind:group={selectedChains} value={option} on:change={fetchHotels}>
                    <label class="checkboxlabel" for={option}>{option}</label>
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

    <div class="buttonContainer">
        <div>
            <button class="changePageButton prevBtn" on:click={minusOffset}>Back</button>
            <button class="changePageButton nextBtn" on:click={plusOffset}>Next</button>
        </div>
    </div>

<style>
    .hotelGrid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
        gap: 10px;
    }

    .filterDiv {
        width: 800px;
        min-width: fit-content;
        display: flex;
        justify-content: space-between;
        padding: 10px 10px;
    }

    .filter {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    input {
        padding: 10px;
    }

    .price {
        width: 100px;
    
    }

    .star {
        background: none;
        border: none;
    }

    .star:hover{
        cursor: pointer;
    }

    .checkboxlabel {
        display:block;
        border:solid 1px gray;
        padding: 8px 12px;
        border-radius:40px;
        -webkit-font-smoothing: antialiased; 
        margin-top:10px;
        font-family:Arial,Helvetica,sans-serif;
        color:gray;
        text-align:center;
    }

    input[type=checkbox] {
        display: none;
    }

    input:checked + label {
        border: solid 1px rgb(27, 112, 203);
        color: white;
        background-color: rgb(27, 112, 203);
        
    }

    .buttonContainer {
        display: flex;
        justify-content: center;
        margin: 20px 0;
    }

    .changePageButton {
        background-color: #007bff;
        border-style: solid;
        border-color: #007bff;
        color: white;
        padding: 8px 17px;
        border-radius: 5px;
        font-size: 16px;
        margin: auto;
        text-align: center;
        font-weight: bold;
    }

    .changePageButton:hover {
        background-color: #0059ff;
        color: white;
        cursor: pointer;
        border-color: #0059ff;
    }

    .nextBtn {
        border-radius: 5px 20px 20px 5px;
    }

    .prevBtn {
        border-radius: 20px 5px 5px 20px;
    }
</style>