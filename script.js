// Get elements from the DOM
const resultEl = document.getElementById("result"); // Element to display BMI result
const detailsEl = document.getElementById("details"); // Element to display BMI category
const btnEl = document.getElementById("btn"); // Button to trigger BMI calculation

// Function to calculate BMI and update the UI
function bmiCalculate() {
  // Get height and weight values from input fields
  let heightVal = parseFloat(document.getElementById("height").value); // Height in cm
  let weightVal = parseFloat(document.getElementById("weight").value); // Weight in kg

  // Validate that height and weight inputs are valid numbers and greater than zero
  if (
    isNaN(heightVal) ||
    isNaN(weightVal) ||
    heightVal <= 0 ||
    weightVal <= 0
  ) {
    alert("Please enter valid numbers"); // Alert the user if inputs are invalid
    return; // Exit the function if inputs are invalid
  }

  // BMI formula: weight (kg) / (height (m)^2)
  // Since height is in cm, we multiply by 10,000 to convert to meters squared
  let bmi = (weightVal / (heightVal * heightVal)) * 10000;
  bmi = parseFloat(bmi.toFixed(2)); // Round BMI to 2 decimal places

  // Display the calculated BMI
  resultEl.textContent = bmi;

  // Determine the BMI category based on the calculated value
  if (bmi < 18.5) {
    detailsEl.innerHTML = `You are <span>Under Weight</span>`;
  } else if (bmi >= 18.5 && bmi < 24.9) {
    detailsEl.innerHTML = `You are <span>Normal Weight</span>`;
  } else if (bmi >= 24.9 && bmi < 29.9) {
    detailsEl.innerHTML = `You are <span>Over Weight</span>`;
  } else if (bmi >= 29.9) {
    detailsEl.innerHTML = `You are <span>Obese</span>`;
  }

  // Clear the input fields after calculation
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
}

// Add event listener to the button to trigger BMI calculation on click
btnEl.addEventListener("click", bmiCalculate);
