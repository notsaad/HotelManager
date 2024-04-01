<script lang="ts">
    import '@fortawesome/fontawesome-free/css/all.css';
	import { afterUpdate, onMount } from 'svelte';
	import { Route } from 'svelte-routing';
    export let numStars: number;
    export let hotelChain: string;
    export let hotelAddress: string;
    export let hotelArea: string;
    export let minPrice: number;
    export let maxPrice: number;
    export let minCapacity: number;

    let hotelUrl = `/hotel${Math.floor(Math.random()*18)}.jpg`.toString();

    afterUpdate(() => {
        hotelUrl = `/hotel${Math.floor(Math.random()*18)}.jpg`.toString();
    })

    let totalCapacity
    onMount(async () => {
        let res = await fetch(`/api/totalCapacity?hotelAddress=${hotelAddress}`);
        let data = await res.json();
        totalCapacity = data.totalCapacity;
    });

    function bookHotel() {
        let url = window.location.href + `/${hotelAddress}/minPrice=${minPrice}&maxPrice=${maxPrice}&minCapacity=${minCapacity}`; // also pass dates
        window.location.href = url;
    }
</script>

<div class="hotel-card" style='background-image: url({hotelUrl});'>
    <div class="hotel-container">
        <div class="hotel-info">
            <h2>{hotelArea}</h2>
            <h4 class="subtitle area">{hotelChain}</h4>
            <div class="capacity area">
                <i class="fa-solid fa-users area subtitle"></i>
                <h4 class="subtitle area">{totalCapacity}</h4>
            </div>
            <div class="stars">
                {#each Array(numStars) as _, i}
                    <i class="fa-solid fa-star star" style="color: #FFD43B;"></i>
                {/each}
                {#each Array(5 - numStars) as _, i}
                    <i class="fa-regular fa-star star full-star" style="color: #FFD43B;"></i>
                {/each}
            </div>
        </div>
        <button on:click={bookHotel}>${minPrice}-{maxPrice}</button>
    </div>
</div>

<style>

    h2 {
        margin-right: 0;
        margin-bottom: 0;
    }

    .subtitle {
        margin: 0 0 10px 0;
        color: lightgray;
    }

    .hotel-card {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        border: 1px solid #ccc;
        margin: 10px;
        align-items: center;
        min-height: 300px; 
        border-radius: 8px;
        box-shadow: 0 3px 6px rgba(0,0,0,0.1);
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
        display: flex;
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
    }
    .star {
        margin: 10px 3px 0 0; 
    }

    button {
        padding: 12px 18px;
        border-radius: 5px;
        background-color: #007bff;
        color: white;
        border: none;
        cursor: pointer;
        z-index: 2;
        position: relative;
        display: flex;
        margin-left: auto;
        margin-top: auto;
        font-weight: bold;
        font-size: 20px;
        
    }

    button:hover {
        background-color: #0056b3;
    }

    .capacity {
        margin-left: 5px;
        display: flex;
        text-align: center;
        align-content: center;
        position: absolute;
        z-index: 2;
        color: white;
        min-width: 60px;    
    }

    .capacity h4 {
        color: rgb(196, 196, 196);
    }

    .area {
        display: inline;
    }
</style>
