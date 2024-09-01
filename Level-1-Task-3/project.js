/* Select the input element where calculations are displayed ,
'AC' button for clearing the screen
 and all buttons with the class 'btn' */
let screen = document.getElementById("number");
let button = document.querySelectorAll(".btn");
let clear = document.getElementById("cut");

// Add click event listeners to each button
button.forEach(btn => {
   btn.addEventListener('click', () => {
      // Get the current value displayed on the screen
      let screenvalue = screen.value;
      // Get the value (text) of the clicked button
      let values = btn.innerHTML;
      screen.value += values;
      clear.innerHTML = "C";

      // Check if the clicked button is 'AC'
      if (values == "AC") {
         screen.value = "";
         clear.innerHTML = "AC";
      }

      // Check if the clicked button is 'C'
      if (values == "C") {
         screen.value = "";
         clear.innerHTML = "AC";
      }

      // Check if the clicked button is '='
      else if (values == "=") {
         screen.value = eval(screenvalue);
      }
   });
});

