<script>
    import DatePicker from '../../components/DatePicker.svelte';

    /**
	 * @type {{ toLocaleDateString: () => void; } | null}
	 */
    let checkInDate = null;
    /**
	 * @type {{ toLocaleDateString: () => void; } | null}
	 */
    let checkOutDate = null;
</script>
  
  <h2>Hotel Booking</h2>
  <DatePicker on:datechange={(event) => {
    checkInDate = event.detail.checkInDate;
    checkOutDate = event.detail.checkOutDate;
}} />

{#if checkInDate}
    <p>Check-in: {checkInDate.toLocaleDateString()}</p>
{/if}

<p>
    THis part doesnt work *fix this later*
</p>

<a href="/customer/dates/">
    submit dates
</a>


<style>
    
</style>