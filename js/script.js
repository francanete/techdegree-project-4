/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator in JavaScript
*************************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://uboraacademy.slack.com

/*** 
 * `quotes` array: stores a series of quotes that will be use to display randomely
***/


let quotes = [
  {
    quote: "The season of failure is the best time for sowing the seeds of success.",
    source: "Yogananda",
    citation: "Autobiography of a yogi",
    year: 1946,
    tag: "Mindset"
  },
  {
    quote: "Sometimes life hits you in the head with a brick. Don't lose faith.",
    source: "Steve Jobs",
    citation: "Stanford Commencement Address",
    year: 2005,
    tag: "Mindset"
  },
  {
    quote: "Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.",
    source: "Yoda",
    citation: "Star Wars: The Phantom Menace",
    year: 1999,
    tag: "Movies"
  },
  {
    quote: "All the world is made of faith, and trust, and pixie dust.",
    source: "J.M. Barrie",
    citation: "Peter Pan",
    year: 1911,
    tag: "Books"
  },
  {
    quote: "Enthusiasm makes up for a host of deficiencies.",
    source: "Barack Obama",
    citation: "A Promised Land",
    year: 2020,
    tag: "Life"
  }
];


/***
 * `getRandomQuote` function: generates a random number based on the index array and create an object with the quote
***/

function getRandomQuote() {
  let randomQuoteNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuoteNumber];
}

/***
 *  Generates a random color to be inserted into the printQuote() fuction
 */

function newBackground() {
  let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  return document.body.style.background = randomColor;
}

/***
 * `printQuote` function: get the object property and value and create a block of HTML. Aditionally, creates a random color any time quote is printed.
***/


function printQuote() {
  let randomQuote = getRandomQuote();
  let randomQuoteHTML = `<p class="quote"> ${randomQuote.quote} </p><p class="source"> ${randomQuote.source}`;
    if ( randomQuote.citation ) {
       randomQuoteHTML += `<span class="citation">${randomQuote.citation}</span>`;
    }
    if ( randomQuote.year ) {
      randomQuoteHTML += `<span class="year">${randomQuote.year}</span>`;
    }
    if ( randomQuote.tag ) {
      randomQuoteHTML += `<br><span class="tag">${randomQuote.tag}</span>`;
    }
    randomQuoteHTML += "</p>";
  return document.getElementById('quote-box').innerHTML = randomQuoteHTML, newBackground();
}


  /***
   * Displays a random quote every 10 seconds
   ***/


 setInterval(function(){
   printQuote();
 }, 10000);



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);


