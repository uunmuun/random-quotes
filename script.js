import quotes from "./quotes.js";

const quoteElement = document.getElementById("quote");
const quoteAuthorElement = document.getElementById("quote-author");
const generateBtn = document.getElementById("generate-btn");

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  const quote = randomQuote.quote;
  const quoteAuthor = randomQuote.author;
  //   const quote = `<em>" ${randomQuote.quote} "</em><br> <span id="author"> - ${randomQuote.author} </span>`;
  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = quoteAuthor;
}

generateBtn.addEventListener("click", generateRandomQuote);

// generateRandomQuote();
