// Get the current time
var now = new Date();
var currentHour = now.getHours();
var greeting;
var userName = "Jonas";
// Get the greeting based on the time of day
if (currentHour < 6) {
  greeting = "Up already, " + userName + "?";
} else if (currentHour < 12) {
  greeting = "Good morning, " + userName + "!";
} else if (currentHour < 15) {
  greeting = "Lunchtime, " + userName + "! Enjoy your meal!";
} else if (currentHour < 18) {
  greeting = "Good afternoon, " + userName + "!";
} else if (currentHour < 21) {
  greeting = "Good evening, " + userName + "! Ready for some fun?";
} else {
  greeting = "Late night, " + userName + "! Time to unwind!";
}

// Update the text with the greeting
document.getElementById("greeting-text").textContent = greeting;
