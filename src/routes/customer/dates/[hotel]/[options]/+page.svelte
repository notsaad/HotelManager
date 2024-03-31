<script lang="ts">
	import Room from "../../../../../components/Room.svelte";

    export let data;
</script>

<div class="roomGrid">
    {#each data.rooms as room}
        <Room price={room.price} view={room.view_type} capacity={room.capacity} amenities={room.amenities} roomNumber={room.room_number} hotelAddress={room.hotel_address}/>
    {/each}
</div>

<style>
    .roomGrid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
        gap: 10px;
    }
</style>