  // Define an array of words to display
  var words = ["Developer", "Student", "Coder", "Designer", "Engineer"];

  // Get a reference to the span element
  var wordSpan = document.getElementById("word");

  // Cycle through the words in a fixed order
  var counter = 0;
  setInterval(function() {
    wordSpan.innerHTML = words[counter];
    counter = (counter + 1) % words.length;
  }, 2000); // Change the word every 2 seconds (adjust as needed)

