// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  // Implement the function to change background color
  
  document.body.style.backgroundColor = "rgb(255, 182, 193)";
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
 
  document.body.style.backgroundColor = "";
  // Implement the function to reset background color
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  // Implement the function to display key pressed

  const keyDisplay = document.getElementById("keyPressDisplay");
  keyDisplay.textContent = `Key pressed: ${event.key}`;
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput(event) {
  // Implement the function to display user input

  const textInput = document.getElementById("textInput");
  const inputDisplay = document.getElementById("textInputDisplay");

  const value = event ? event.target.value : textInput.value;

  inputDisplay.textContent = `You typed: ${value}`;
}

// Attach Event Listeners
function setupEventListeners() {
// Attach event listener to change background color when the button is clicked
  document
    .getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor)

  // Attach event listener to reset background color when the body is double-clicked
  document
    .getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor)

  // Attach event listener to display key pressed when a key is pressed down
  document.addEventListener('keydown', displayKeyPress)

  // Attach event listener to display user input in real-time as they type
  document.getElementById('textInput').addEventListener('input', displayUserInput)
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}

if (typeof module !== "undefined"){
module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}
}
