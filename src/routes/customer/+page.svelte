<script>
// @ts-nocheck

	import { DateInput } from 'date-picker-svelte'
  import { myStore } from './myStore.js';
	/**
	 * @type {null}
	 */
	let checkInDate = null;
	let checkOutDate = null;
    let date = null;

    let currentDate = new Date();

    function calculateDayAfter(date) {
        const nextDay = new Date(date);
        nextDay.setDate(nextDay.getDate() + 1); 
        return nextDay;
    }

    function calculateDaysDifference(startDate, endDate) {
    if (!startDate || !endDate) return 0; // Handle cases with missing dates

    const timeDifference = endDate.getTime() - startDate.getTime();
    const daysDifference = Math.abs(timeDifference / (1000 * 60 * 60 * 24)); 
    console.log(Math.round(daysDifference));
    return Math.round(daysDifference); 
  }

    function submitDates(a, b){
      let url = '/customer/dates/'
      let length = calculateDaysDifference(checkInDate, checkOutDate);
      myStore.set(length);
      console.log($myStore);
      window.location.href = url;
    }

</script>
  

  <div class="dateDiv">
    <h2>Hotel Booking</h2>
    <div class="checkinDiv">
        <h3>Check-In Date:</h3>
        <DateInput min={currentDate} bind:value={checkInDate} format="yyyy-MM-dd" placeholder="Select Check-In Date" />
    </div>
    <div class="checkoutDiv">
        <h3>Check-Out Date:</h3>
        <DateInput min={checkInDate ? calculateDayAfter(checkInDate) : currentDate} disabled={ checkInDate ? false : true } bind:value={checkOutDate} format="yyyy-MM-dd" placeholder="Select Check-Out Date" />
    </div>
    <div class="submit">
        {#if checkInDate && checkOutDate}
          <button on:click={submitDates(checkInDate, checkOutDate)}>Submit Dates</button>
        {:else}
            <p>Must select dates to proceed</p>
        {/if}
    </div>
  </div>

<style>
.dateDiv {
  text-align: center; /* Centers the h2 and the date inputs */ 
}

h2 {
  margin-bottom: 15px; /*  Adds space below the h2  */
}

.checkinDiv, 
.checkoutDiv {
  display: inline-block; /* Allows the divs to sit side-by-side */
  margin: 0 10px;  /* Adds some space between the date inputs */
}

a {
    width: 120px;
  display: block;     /* Makes the link take up full available width */
  margin: 15px auto;  /* Centers the button horizontally */
  padding: 10px 20px; /* Adds padding to the button */
  background-color: white;  /* Example button color */
  color: black;
    border: 1px solid black;  /* Add a border */
    border-radius: 5px;       /* Slightly rounded corners */
  text-decoration: none; /* Removes the default underline */
  cursor: pointer;     /* Changes cursor to a pointer on hover */
}

a:hover {
    background-color: black;
    color: white;
    cursor: pointer;
    transform: scale(0.975);
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
}

</style>