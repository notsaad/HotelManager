<script>
    import Form from '../../../../components/Form.svelte';
</script>
  
<h2>Confirm Booking</h2>

<div class="mainDiv">
   <div class="form-container">
     <Form/>
   </div>

   <!-- <div class="submitDiv">
       <a href="/">
           Confirm Payment
       </a>
   </div> -->
</div>




<style>

.form-container {
  display: flex; /* Enable flexbox layout */
  justify-content: center; /* Center horizontally */
  align-items: center;     /* Center vertically (if desired) */
  width: 100%;            /* Container to occupy full width */
}

/* Style the link as a button */
.submitDiv a {
  display: block;         /* Make it a block element for width/margin control */
  width: 200px;           /* Adjust width as needed */
  margin: 20px auto;      /* Top/bottom margin, auto for horizontal centering */
  padding: 10px 20px;     /* Button padding */
  background-color: #4CAF50;  /* Example button color */
  color: white;           /* White text  */
  border: none;           /* Remove default link border */
  border-radius: 5px;     /* Slightly rounded corners */
  text-align: center;     /* Center the text */
  text-decoration: none;  /* Remove underline */
  cursor: pointer;        /* Indicate it's clickable */
}

.submitDiv a:hover {
    background-color: black;
    color: white;
    cursor: pointer;
    transform: scale(0.975);
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
}
    
</style>