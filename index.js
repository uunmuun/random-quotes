import quotes from "./src/data/quotes.js";
import {
  toggleFavorite,
  hideFavoriteBtn,
  showFavoriteCard,
} from "./src/handlers/favorites.js";
import {
  displayQuote,
  handleQuote,
  findQuoteById,
} from "./src/handlers/quote.js";
import {
  localStorageSetItem,
  localStorageGetitem,
} from "./src/utils/localStorage.js";

const CURRENT_QUOTE_KEY = "currentQuote";
const FAVORITE_QUOTES_KEY = "favoriteQuotes";

let currentQuote = null;
let favoriteQuotes = [];

function setCurrentQuote(quote, shouldToggleFavorite = false) {
  if (shouldToggleFavorite) {
    quote.isFavorite = !quote.isFavorite;
    if (quote.isFavorite) {
      favoriteQuotes.push({ ...quote });
    } else {
      const index = favoriteQuotes.findIndex(
        (favoriteQuote) => favoriteQuote.id === quote.id
      );
      if (index !== -1) {
        favoriteQuotes.splice(index, 1);
      }
    }
    localStorageSetItem(FAVORITE_QUOTES_KEY, favoriteQuotes);
  }
  currentQuote = quote;
  localStorageSetItem(CURRENT_QUOTE_KEY, currentQuote);
}

const favoritesContainer = document.getElementById("favorites-container");
const quoteFavoriteBtn = document.getElementById("quote-favorite-btn");
hideFavoriteBtn();
quoteFavoriteBtn.addEventListener("click", () =>
  toggleFavorite(
    currentQuote,
    setCurrentQuote,
    quoteFavoriteBtn,
    favoritesContainer
  )
);
const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", () =>
  handleQuote(quotes, favoriteQuotes, setCurrentQuote)
);

function init() {
  const currentQuoteFromStorage = localStorageGetitem(CURRENT_QUOTE_KEY);
  if (currentQuoteFromStorage) {
    displayQuote(currentQuoteFromStorage);
    const quote = findQuoteById(quotes, currentQuoteFromStorage.id);
    quote.isFavorite = currentQuoteFromStorage.isFavorite;
    currentQuote = quote;
  }

  const favoriteQuoteFromStorage = localStorageGetitem(FAVORITE_QUOTES_KEY);
  if (favoriteQuoteFromStorage) {
    favoriteQuoteFromStorage.forEach((quote) => {
      favoriteQuotes.push(quote);
      showFavoriteCard(quote, setCurrentQuote, favoritesContainer);
    });
  }
}

window.addEventListener("load", init);

export { quoteFavoriteBtn };
