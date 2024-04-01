<script lang="ts">
// @ts-nocheck

    import { DateInput } from 'date-picker-svelte'
    import { myStore } from './myStore.js';
    import { customerStore, beginDateStore, endDateStore } from './customerStore.js';
    /**
	 * @type {null}
	 */
    let checkInDate:Date = null;
    let checkOutDate:Date = null;
    let fullName = null;
    let customerId = null;
    let address = null;
    let customerAdded = false;
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
        return Math.round(daysDifference); 
    }

    function submitDates(a, b){
        if (!customerAdded) {
            alert('Please add your information first');
            return;
        }
        customerStore.set(customerId);

        let dd = String(a.getDate()).padStart(2, '0');
        let mm = String(a.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = a.getFullYear();

        const beginDate = `${yyyy}-${mm}-${dd}`;
        beginDateStore.set(beginDate);

        dd = String(b.getDate()).padStart(2, '0');
        mm = String(b.getMonth() + 1).padStart(2, '0'); //January is 0!
        yyyy = b.getFullYear();

        const endDate = `${yyyy}-${mm}-${dd}`;
        endDateStore.set(endDate);

        let url = `/customer/dates/`
        let length = calculateDaysDifference(checkInDate, checkOutDate);
        myStore.set(length);
        window.location.href = url;
    }

    async function addCustomer() {
        if (!fullName || !customerId || !address) {
            alert('Please enter your full name, customer ID and address');
            return;
        }

        const res = await fetch('/api/addCustomer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fullname: fullName,
                customerId: customerId,
                address: address,
            })
        })

        if (!res.ok) {
          if(res.status === 409) {
            alert('Customer already exists, signed in with id ' + customerId);
          } else {
            alert('Customer was not added successfully');
            customerAdded = false
            return;
          }
        }
        customerAdded = true

    }

    async function deleteCustomer() {
        if (customerId === null) {
          alert('Please enter your customer ID before deleting');
          return;
        }
        console.log(customerId);
        let res = await fetch(`/api/deleteCustomer?customerId=${customerId}`)
        if (!res.ok) {
          alert('Customer was not deleted successfully');
          return;
        }
        else {
          alert('Customer was deleted successfully');
          return;
        }
    }
</script>
  

<div class="dateDiv">
    <div class="customerInfo">
      <h1>Enter your information</h1>
      <button class="delete" on:click={deleteCustomer}>Delete Customer</button>
      <form method="post" on:submit|preventDefault={addCustomer}>
        <input bind:value={customerId} type="number" id="customerId" name="cId" placeholder="Your ID">
        <input bind:value={fullName} type="text" id="fname" name="fname" placeholder="Full Name">
        <input bind:value={address} type="text" id="address" name="address" placeholder="Address">
        <button>Submit</button>
      </form>
    </div>
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

button {
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

button:hover {
    background-color: black;
    color: white;
    cursor: pointer;
    transform: scale(0.975);
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
}

.delete {
  display: flex;
}

</style>