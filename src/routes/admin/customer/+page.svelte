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

    export let data;

</script>

<div>
    <h1>Update Customer Info</h1>
    <input type="number" bind:value={customerId} placeholder="Customer ID"/>
    <input type="text" bind:value={customerFullName} placeholder="Full Name"/>
    <input type="text" bind:value={customerAddress} placeholder="Address"/>
    <button on:click={updateCustomerInfo}>Update Info</button>
</div>

<div>
    <h1>Customers (reload page to see changes)</h1>
    <table>
        <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Address</th>
        </tr>
        {#each data.customers as customer}
        <tr>
            <td>{customer.customer_id}</td>
            <td>{customer.full_name}</td>
            <td>{customer.address}</td>
        </tr>
        {/each}
    </table>
</div>

<style>
    table {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
    }
    th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #04AA6D;
        color: white;
    }
    tr:hover {background-color: #ddd;}
    tr:nth-child(even){background-color: #f2f2f2;}

    td, th {
        border: 1px solid #ddd;
        padding: 8px;
    }
</style>