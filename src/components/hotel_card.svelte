<script lang="ts">
    import '@fortawesome/fontawesome-free/css/all.css';
	import { afterUpdate } from 'svelte';
    export let numStars: number;
    export let hotelAddress: string;
    export let hotelChain: string;
    export let hotelArea: string;

    let hotelUrl = `/hotel${Math.floor(Math.random()*18)}.jpg`.toString();

    afterUpdate(() => {
        hotelUrl = `/hotel${Math.floor(Math.random()*18)}.jpg`.toString();
    })

    function bookHotel() {
        // Add your booking logic here
    }
</script>

<div class="hotel-card" style='background-image: url({hotelUrl});'>
    <div class="hotel-container">
        <div class="hotel-info">
            <h2>{hotelChain}</h2>
            <h4 class="subtitle">{hotelArea}</h4>
            <div class="stars">
                {#each Array(numStars) as _, i}
                    <i class="fa-solid fa-star star" style="color: #FFD43B;"></i>
                {/each}
                {#each Array(5 - numStars) as _, i}
                    <i class="fa-regular fa-star star full-star" style="color: #FFD43B;"></i>
                {/each}
            </div>
        </div>
        <button on:click={bookHotel}>Book</button>
    </div>
</div>

<style>

    h2 {
        margin-bottom: 0;
    }

    .subtitle {
        margin-top: 0;
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
        padding: 20px;
        margin: auto;
    }

    .hotel-info {
        position: relative;
        z-index: 2;
        color: white;
        margin-top: auto;
    }
    .star {
        margin: 0 3px; 
    }

    button {
        padding: 8px 15px;
        border-radius: 5px;
        background-color: #007bff;
        color: white;
        border: none;
        cursor: pointer;
        z-index: 2;
        position: relative;
        height: 2.2rem;
        display: inline;
        margin-left: auto;
    }

    button:hover {
        background-color: #0056b3;
    }
</style>
