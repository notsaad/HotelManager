<script>
// @ts-nocheck

    //import { navigate } from 'sveltekit';
    //import { goto } from 'svelte/navigation';
    //import { goto } from '@sveltejs/navigation';

    import {
      cardNumber,
      cardHolder,
      selectedMonth,
      month,
      selectedYear,
      year,
      ccv,
      submitInfo
    } from '../store/Store.js';
  
    const handleSubmit = () => {
      $submitInfo.push(
        $cardNumber,
        $cardHolder,
        $selectedMonth,
        $selectedYear,
        $ccv
      );
      console.log($submitInfo);
    };
  </script>
  
  <form on:submit|preventDefault={handleSubmit}>
      <div class="inputBox">
          <span>card number</span>
          <input type="text" maxlength="16" class="card-number-input" bind:value={$cardNumber} placeholder="" on:focus={()=>{$cardNumber = ""}}>
      </div>
      <div class="inputBox">
          <span>card holder</span>
          <input type="text" maxlength="16" class="card-holder-input" bind:value={$cardHolder} on:focus={()=>{$cardHolder = ""}}>
      </div>
      <div class="flexbox">
          <div class="inputBox">
              <span>expiration mm</span>
              <select bind:value={$selectedMonth} name="" id="" class="month-input">
        <option value="month" selected disabled>month</option>
        {#each $month as item}				
          <option value={item.month}>{item.month}</option>
              {/each}
              </select>
          </div>
          <div class="inputBox">
              <span>expiration yy</span>
              <select bind:value={$selectedYear} name="" id="" class="year-input">
                  <option value="year" selected disabled>year</option>
               {#each $year as item}				
          <option>{item.year}</option>
              {/each}
              </select>
          </div>
          <div class="inputBox">
              <span>ccv</span>
              <input bind:value={$ccv} type="text" maxlength="4" class="ccv-input" on:focus={()=>{$ccv = ""}}>
          </div>
      </div>
      <div class="submitDiv">
        <a href="/customer/dates/confirm/final" class="submit-btn" >Submit</a>
      </div>
  </form>
  
  <style>
      @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap");
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
      * {
        font-family: "Poppins", sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        border: none;
        text-decoration: none;
        text-transform: uppercase;
      }
  
      form {
        background: #fff;
        border-radius: 5px;
        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        padding: 20px;
        width: 600px;
        padding-top: 160px;
      }
  
      form .inputBox {
        margin-top: 20px;
      }
  
      form .inputBox span {
        display: block;
        color: #999;
        padding-bottom: 5px;
      }
  
      form .inputBox input,
      form .inputBox select {
        width: 100%;
        padding: 10px;
        border-radius: 10px;
        border: 1px solid rgba(0, 0, 0, 0.3);
        color: #444;
      }
  
      form .flexbox {
        display: flex;
        gap: 15px;
      }
  
      form .flexbox .inputBox {
        flex: 1 1 150px;
      }
  
      form .submit-btn {
        width: 100%;
        background: linear-gradient(45deg, blueviolet, deeppink);
        margin-top: 20px;
        padding: 10px;
        font-size: 20px;
        color: #fff;
        border-radius: 10px;
        cursor: pointer;
        transition: 0.2s linear;
      }
  
      form .submit-btn:hover {
        letter-spacing: 2px;
        opacity: 0.8;
      }
  </style>  