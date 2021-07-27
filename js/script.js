/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator in JavaScript
*************************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://uboraacademy.slack.com

/*** 
 * `quotes` array 
***/


let quotes = [
  {
    "quote": "The season of failure is the best time for sowing the seeds of success.",
    "source": "Yogananda",
    "citation": "Autobiography of a yogi",
    "year": 1946
  },
  {
    "quote": "Sometimes life hits you in the head with a brick. Don't lose faith.",
    "source": "Steve Jobs",
    "citation": "Stanford Commencement Address",
    "year": 2005
  },
  {
    "quote": "Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.",
    "source": "Yoda",
    "citation": "Star Wars: The Phantom Menace",
    "year": 1999
  },
  {
    "quote": "All the world is made of faith, and trust, and pixie dust.",
    "source": "J.M. Barrie",
    "citation": "Peter Pan",
    "year": 1911
  },
  {
    "quote": "Enthusiasm makes up for a host of deficiencies.",
    "source": "Barack Obama",
    "citation": "A Promised Land",
    "year": 2020
  }
];



/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  let randomQuoteNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuoteNumber];
}


/***
 * `printQuote` function
***/


function printQuote () {
  let randomQuote = getRandomQuote();
  let randomQuoteHTML = `<p class="quote"> ${randomQuote.quote} </p><p class="source"> ${randomQuote.source}`;
    if ( randomQuote.citation ) {
       randomQuoteHTML += `<span class="citation">${randomQuote.citation}</span>`;
    }
    if ( randomQuote.year ) {
      randomQuoteHTML += `<span class="year">${randomQuote.year}</span>`;
    }
    randomQuoteHTML += "</p>";
  return document.getElementById('quote-box').innerHTML = randomQuoteHTML;


  // console.log(randomQuote);
  // console.log(randomQuoteHTML);
}





printQuote();



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);


