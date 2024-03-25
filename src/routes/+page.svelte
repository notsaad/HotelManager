<script lang="ts">
	import type { PageData } from "./$types";
    import Button from '../components/Button.svelte';

    

    //export let data: PageData
</script>

<body>
    <div class="mainText">
        <h1>DSO Hotels</h1>
    </div>
    <div class="loginDiv">
        <a href='/customer'>Room Booking</a>
        <a href='/employee'>Employee Login</a>
    </div>
</body>

<!-- <pre>
    <code>
        {JSON.stringify(data.hotelChains, null, 2)};
    </code>
</pre> -->
<!-- <button formaction="?/temp"></button> -->

<style>
    body {
    display: flex;           /* Center content horizontally */
    flex-direction: column;  /* Stack items vertically */
    align-items: center;     /* Center items along the main axis */
    justify-content: center; /* Center items along the cross axis */
    min-height: 100vh;       /* Ensure body takes up full viewport height */
    margin: 0;               /* Reset default margins */
    }

    .loginDiv {
    display: flex;            /* Display login links side by side */
    gap: 20px;                /* Add spacing between links */
    }

    .loginDiv a {
    text-decoration: none;    /* Remove default underline */
    background-color: white;
    color: black;
    padding: 10px 15px;       /* Add some padding */
    border: 1px solid black;  /* Add a border */
    border-radius: 5px;       /* Slightly rounded corners */
    }

    .loginDiv a:hover {
        background-color: black;
        color: white;
        cursor: pointer;
        transform: scale(0.975);
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
    }

    .mainText {
        text-align: center;
    }

</style>