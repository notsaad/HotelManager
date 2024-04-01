<div>
    <a href="/admin/customer">Customer</a><br>
    <a href="/admin/hotel">Hotels</a><br>
    <a href="/admin/hotel/hotelroom">Hotel Rooms</a><br>
</div>


<style>
    /* Style for the container */
/* Style for the container */
div {
    text-align: center;
  display: flex;           /* Enable flexbox */
  align-items: center;     /* Vertical alignment */
  justify-content: center; /* Horizontal alignment  */
  flex-direction: column;  /* Stack the buttons vertically */
  height: 300px;           /* Add a height to the container (adjust as needed) */
}


/* Style for the button links */
div a {
  display: inline-block;  /* Allows us to control width, height, padding */
  background-color: #4CAF50; /* Example background color */
  color: white;          
  padding: 10px 20px;    /* Adds space around the text  */
  margin: 0 10px 10px 0; /* Space between the buttons */
  text-decoration: none; /* Removes default underline */
  border-radius: 5px;    /* Rounded corners */
}

/* Make the buttons change slightly on hover */
div a:hover {
  background-color: #3e8e41; /* Slightly darker green on hover */
}

</style>