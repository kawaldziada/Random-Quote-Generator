
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//list of quotes from my favorite authors
var quotes = [
  {
    quote: "The second half of a man's life is made up of nothing but the habits he has acquired during the first half.",
    source: "Fiodor Dostojewski",
    citation: "Ideas for Our Time",
    year: 1879,
    category: "wise"
  },
  {
    quote: "Taking a new step, uttering a new word, is what people fear most.",
    source: "Fiodor Dostojewski",
    citation: "Crime and Punishment",
    year: 1866,
    category: "sad"
  },
  {
    quote: "Nothing in this world is harder than speaking the truth, nothing easier than flattery.",
    source: "Fiodor Dostojewski",
    citation: "Crime and Punishment",
    year: 1866,
    category: "sad"
  },
  {
    quote: "There is nothing either good or bad, but thinking makes it so.",
    source: "William Shakespeare",
    citation: "Hamlet",
    year: 1602,
    category: "wise"
  },
  {
    quote: "The fool doth think he is wise, but the wise man knows himself to be a fool.",
    source: "William Shakespeare",
    citation: "As You Like It",
    year: 1600,
    category: "wise"
  },
  {
    quote: "Everything comes in time to him who knows how to wait.",
    source: "Leo Tolstoy",
    citation: "War and Peace",
    year: 1869,
    category: "happy"
  },
  {
    quote: "Thoughts are the shadows of our feelings — always darker, emptier, simpler.",
    source: "Friedrich Nietzsche",
    citation: "The Gay Science",
    year: 1882,
    category: "sad"
  },
  {
    quote: "One must pay dearly for immortality; one has to die several times while one is still alive.",
    source: "Friedrich Nietzsche",
    citation: "EcceHomo",
    year: 1888,
    category: "sad"
  },
  {
    quote: "I realize today that nothing in the world is more distasteful to a man than to take the path that leads to himself.",
    source: "Hermann Hesse",
    citation: "Demian",
    year: 1919,
    category: "wise"
  },
  {
    quote: "Oh, love isn't there to make us happy. I believe it exists to show us how much we can endure.",
    source: "Hermann Hesse",
    year: 1904,
    category: "happy"
  },
  {
    quote: "You can't make an omelet without breaking a few eggs.",
    source: "Famous proverb",
    category: "wise"
  }
]
//array where i store used quotes preventing it from repeating
var wereBefore = []
//establishing function to generate random number within I pass my quotes array as a parameter
function getRandomQuote(quo) {
//random number is generated between first and last object of my array
    var randomNumber = Math.floor(Math.random() * (quo.length));
      // I establish variable "chosen" with a value of randomly chosen object inside "quotes" array
      var chosen = quo[randomNumber];
      // I establish another varibale "position" to get accurate position of randomly chosen object inside an array
      var position = quo.indexOf(chosen);
      // pushing object into new created array "wereBefore"
      wereBefore.push(chosen);
      // I delete randomly chosne object from quotes array
      quo.splice(position, 1);
      console.log(wereBefore);
      console.log(quo);
      //after number of object inside "wereBefore" arry reach 11 object I push all the objects back to "quotes" array and cleare "wereBefore" array
      if (wereBefore.length >= 11) {
        quo.push.apply(quo, wereBefore);
        wereBefore = [];
      }
      return chosen
}

// Function genereating random color useing rgb values
function colors() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  // I concat randomly chosen values into into string and assign it to a "egb" variable
  var rgb = "rgb(" + red + ", " + green + ", " + blue + ")";
  return rgb
}

function printQuote() {
  // variable background has value witch it returned by a "color" function
  var background = colors();
  // "onScreen" variable has value of "getRandomQuote" function to witch I pass "quotes" array as a parameter
  var onScreen = getRandomQuote(quotes);
  // I concat properties of randomly chosen object into string and assign it to a "html" variable
  var html = "<p class=\"quote\">" + onScreen.quote + "</p>";
  html += "<p class=\"source\">" + onScreen.source;
  // I display propertie "citation" only if it is not left out
  if (onScreen.citation) {
    html += "<span class=\"citation\">" + onScreen.citation + "</span>";
  }
  // I display propertie "year" only if it is not left out
  if (onScreen.year) {
    html += "<span class=\"year\">" + onScreen.year + "</span>";
  }
  html += "</p>";
  // I display ready "html" variable on screen
  document.getElementById("quote-box").innerHTML = html;
  // I change background color evry time new quote is displayed on screen
  document.body.style.backgroundColor = background;
  // and button as well
  document.getElementById("loadQuote").style.backgroundColor = background;
  return onScreen
}
// I call "printQuote" function to make everything works
printQuote();
// every 30 secound quote changes by itself
setInterval(printQuote, 30000);
