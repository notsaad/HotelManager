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
    }

</script>

<div>
    <h1>Update Customer Info</h1>
    <input type="number" bind:value={customerId} placeholder="Customer ID"/>
    <input type="text" bind:value={customerFullName} placeholder="Full Name"/>
    <input type="text" bind:value={customerAddress} placeholder="Address"/>
    <button on:click={updateCustomerInfo}>Update Info</button>
</div>