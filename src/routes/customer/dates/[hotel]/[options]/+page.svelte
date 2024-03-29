<script lang="ts">
	import Room from "../../../../../components/Room.svelte";

    export let data;
    console.log(data)
</script>
<h1> Hello </h1>

<div class="roomGrid">
    {#each data.rooms as room}
        <Room price={room.price} view={room.view_type} capacity={room.capacity} amenities={room.amenities}/>
    {/each}
</div>

<style>
    .roomGrid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
        gap: 10px;
    }
</style>