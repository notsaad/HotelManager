<script>
    // You might have logic here to fetch booking details, if you want to display them
  </script>
  
  <div class="booking-confirmation">
    <div class="header">
      <i class="icon-checkmark"></i>
      <h1>Booking Confirmed!</h1>
    </div>
  
    <p>We're excited to welcome you. Your stay is all set!</p>
  
    <!--
    <div class="details">
      <h3>Booking Summary</h3>
      <p><strong>Dates:</strong> {bookingStartDate} - {bookingEndDate}</p>
      <p><strong>Room Type:</strong> {roomType}</p>
      ... (Add more details as needed)
    </div>
    -->
  
    <a href="/" class="button">Return to Homepage</a>
  </div>
  
  <style>
  .booking-confirmation {
    text-align: center;
    padding: 2em;
    max-width: 500px; 
    margin: 2em auto;
    border: 2px solid green; 
    border-radius: 5px;
  }
  
  .icon-checkmark {
    font-size: 3em;
    color: green;
  }
  
  .header {
    margin-bottom: 1em;
  }
  
  .button {
    background-color: green;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
  }

.button:hover {
    background-color: rgb(2, 172, 2);
    cursor: pointer;
    transform: scale(0.975);
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
}

  </style>
  