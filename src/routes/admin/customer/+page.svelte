<script lang="ts">
    let customerId:number | null | undefined = null;
    let customerFullName:string | null | undefined = null;
    let customerAddress:string | null | undefined = null;

    async function updateCustomerInfo() {
        if (!customerId || !customerFullName || !customerAddress) {
            alert('Please fill out all fields');
            return;
        }

        let res = await fetch(`/api/updateCustomer?id=${customerId}&fullName=${customerFullName}&address=${customerAddress}`)
        let data = await res.json();

        if (data.error) {
            alert('Customer info was not updated successfully');
            return;
        }
        else{
            alert('Customer info was successfully updated');
            return;
        }
    }

</script>

<div>
    <h1>Update Customer Info</h1>
    <input type="number" bind:value={customerId} placeholder="Customer ID"/>
    <input type="text" bind:value={customerFullName} placeholder="Full Name"/>
    <input type="text" bind:value={customerAddress} placeholder="Address"/>
    <button on:click={updateCustomerInfo}>Update Info</button>
</div>

<style>
    /* General container styling */
div {
    text-align: center; /* Centers form elements */
    margin: 20px auto;  /* Adds margin for visual spacing */
    padding: 20px;
    width: 400px;       /* Adjust width as needed */
    border: 1px solid #ddd; 
    border-radius: 5px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow effect */
}

/* Style the heading */
h1 {
    margin-bottom: 20px; /* Space between heading and inputs */
}

/* Style the input fields */
input[type="number"], input[type="text"] {
    width: calc(100% - 22px); /* Takes up container width, minus padding */
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

/* Style the button */
button {
    background-color: #4CAF50; /* Example button color */
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;        
}

button:hover {
    background-color: #3e8e41; /* Darker color on hover */
}

</style>