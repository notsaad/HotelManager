
<script>
	import Button from "../../components/Button.svelte";
</script>

<body>
    <div class="main">
        <h1>Employee Login</h1>
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
            <div class="buttonsDiv">
                <div class="backButton">
                    <a href="/">Back</a>
                </div>
                <div class="submitButton">
                    <a href="/">Submit</a>
                </div>
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

    .buttonsDiv {
    display: flex;           /* Use flexbox for layout */   
    justify-content: space-around; /* Distribute space around buttons */
    margin-top: 20px;         /* Add space above the buttons */
    }

    .buttonsDiv a:hover {
        background-color: black;
        color: white;
        cursor: pointer;
        transform: scale(0.975);
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
    }

    .backButton a, .submitButton a{  /* Style the button containers */
    flex: 1;                  /* Allow buttons to grow if needed */
    margin: 0 5px;            /* Add a small margin between buttons */
    background-color: white;
    color: black;
    padding: 10px 15px;       /* Add some padding */
    border: 1px solid black;  /* Add a border */
    border-radius: 5px;       /* Slightly rounded corners */
    text-decoration: none;    /* Remove default underline */
    }

</style>