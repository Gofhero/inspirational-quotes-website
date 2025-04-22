const quotes = require('./quotes');

const quoteDisplay = document.getElementById('quoteDisplay');
const newQuoteButton = document.getElementById('newQuoteButton');

function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = quotes[randomIndex];
}

newQuoteButton.addEventListener('click', displayRandomQuote);

// Display the first quote on initial load
displayRandomQuote();