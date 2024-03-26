<script>
// @ts-nocheck

    import Flatpickr from 'svelte-flatpickr';
    import 'flatpickr/dist/flatpickr.min.css'; 

    /**
	 * @type {{ toLocaleDateString: () => void; } | null}
	 */
    let selectedCheckInDate = null;
    /**
	 * @type {{ toLocaleDateString: () => void; } | null}
	 */
    let selectedCheckOutDate = null;

    const config = {
        mode: 'range', // Enable selecting a date range
        minDate: "today", // Disable past dates 
        onChange: (/** @type {({ toLocaleDateString: () => void; } | null)[]} */ dates) => {
            selectedCheckInDate = dates[0];
            selectedCheckOutDate = dates[1];
        }
    };
</script>

<Flatpickr bind:value={selectedCheckInDate} config={config} />

{#if selectedCheckInDate && selectedCheckOutDate}
    <p>Check-in: {selectedCheckInDate.toLocaleDateString()}</p>
    <p>Check-out: {selectedCheckOutDate.toLocaleDateString()}</p>
{/if}
