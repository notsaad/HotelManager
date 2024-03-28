<script>
    export let numStars;
    export let hotelAddress;
    export let hotelChain;

    function bookHotel() {
        // Add your booking logic here
    }
</script>

<div class="hotel-card">
    <div class="hotel-info">
        <h3>{hotelChain}</h3>
        <p>{hotelAddress}</p>
        <div class="stars">
            {#each Array(numStars) as _, i}
                <span class="star" />
            {/each}
        </div>
    </div>
    <button on:click={bookHotel}>Book</button>
</div>

<style>
    .hotel-card {
        border: 1px solid #ccc;
        padding: 10px;
        margin: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 150px;
        min-height: 200px;
    }

    .hotel-info {
        text-align: center;
        margin-bottom: 10px;
    }

    .stars {
        display: flex;
        justify-content: center;
    }

    .star {
        width: 20px;
        height: 20px;
        background-color: gold;
        margin: 0 2px;
    }
</style>