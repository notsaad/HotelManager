
<script>
	import Button from "../../components/Button.svelte";
</script>

<body>
    <div class="main">
        <h1>Employee Login</h1>
        <h3>Enter your login credentials</h3>
        <form action="">
            <label for="first">
                  Username:
              </label>
            <input type="text"
                   id="first"
                   name="first"
                   placeholder="Enter your Username" required>
 
            <label for="password">
                  Password:
              </label>
            <input type="password"
                   id="password"
                   name="password"
                   placeholder="Enter your Password" required>
            <div class="submitButton">
                <a href="/">Submit</a>
            </div>
        </form>
    </div>
</body>

<style>
body {
  display: flex;           
  flex-direction: column;  
  align-items: center;     
  justify-content: center; 
  min-height: 100vh;       
  margin: 0;               
  font-family: Arial, sans-serif; /* Example font */
}

.main {
  text-align: center;      /* Center all content within the form */
}

.main label {
  display: block;          /* Make labels occupy full width */
  margin-bottom: 5px;      /* Add space below labels */
  text-align: left;
}

.main input[type="text"], 
.main input[type="password"] {
  width: 250px;            /* Set a consistent width for inputs */
  padding: 10px; 
  margin-bottom: 15px;      
  border: 1px solid #ccc;   /* Light border */
  border-radius: 4px;
}

.submitButton {
  text-align: center;       /* Center the submit button/link */
}

.submitButton a {
  background-color: #4CAF50; /* Example button color */
  color: white;
  padding: 12px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 5px;
}

.submitButton a:hover {
        background-color: #347637;
        color: white;
        cursor: pointer;
        transform: scale(0.975);
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
    }

</style>