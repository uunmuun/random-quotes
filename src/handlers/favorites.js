<<<<<<< HEAD
import { quoteFavoriteBtn } from "../../index.js";

function toggleFavorite(quote, btn, container) {
  quote.isFavorite = !quote.isFavorite;
  toggleFavoriteBtnIcon(quote.isFavorite, btn);

  if (quote.isFavorite) {
    showFavoriteCard(quote, container);
=======
import { currentQuote, currentQuote as quote } from "../../index.js";

const favoritesContainer = document.getElementById("favorites-container");
const favoriteBtn = document.getElementById("favorite-btn");
favoriteBtn.addEventListener("click", () => toggleFavorite(currentQuote));

hideBtn(favoriteBtn);

function toggleFavorite(quote) {
  quote.isFavorite = !quote.isFavorite;
  const { text, author, isFavorite } = quote;
  toggleFavoriteBtnIcon(isFavorite, favoriteBtn);

  if (isFavorite) {
    showFavoriteCard(text, author, favoritesContainer);
>>>>>>> 47116977aec46b6ae04319aa47f467f6122538ac
  } else {
    removeFavoriteCard(quote.id);
  }
}

function handleFavorite(isFavorite) {
<<<<<<< HEAD
  showFavoriteBtn();
  toggleFavoriteBtnIcon(isFavorite);
}

function toggleFavoriteBtnIcon(isFavorite) {
  quoteFavoriteBtn.classList.toggle("fa", isFavorite);
  quoteFavoriteBtn.classList.toggle("far", !isFavorite);
=======
  showBtn(favoriteBtn);
  toggleFavoriteBtnIcon(isFavorite, favoriteBtn);
}

function toggleFavoriteBtnIcon(isFavorite, el) {
  el.classList.toggle("fa", isFavorite);
  el.classList.toggle("far", !isFavorite);
>>>>>>> 47116977aec46b6ae04319aa47f467f6122538ac
}

function showFavoriteBtn() {
  quoteFavoriteBtn.style.display = "inline-block";
}

function hideFavoriteBtn() {
  quoteFavoriteBtn.style.display = "none";
}

function removeFavoriteQuote(quote) {
  quote.isFavorite = false;
  removeFavoriteCard(quote.id);
  const currentQuote = document.querySelector("[data-current-quote-id]");
  const currentQuoteId = currentQuote.dataset.currentQuoteId;
  if (quote.id === currentQuoteId) {
    toggleFavoriteBtnIcon(quote.isFavorite);
  }
}

function showFavoriteCard(quote, container) {
  const { id, text, author } = quote;
  const favoriteCard = document.createElement("div");
  favoriteCard.classList.add("favorite-card");
  favoriteCard.dataset.favoriteQuoteId = id;
  favoriteCard.innerHTML = `
  <div class="favorite-card-content"
          <p>${text}</p>
          <p class='favorite-card-author'>${author}</p>
          </div>
          <button class = "btn btn-danger"><i class="fas fa-trash-alt"></i>
          Remove from favorites</button>
          `;
  container.appendChild(favoriteCard);
  const removeButton = favoriteCard.querySelector(".btn-danger");
  removeButton.addEventListener("click", () => removeFavoriteQuote(quote));
}

function removeFavoriteCard(id) {
  const card = document.querySelector(`[data-favorite-quote-id="${id}"]`);
  if (card) {
    card.remove();
  }
}

<<<<<<< HEAD
export { handleFavorite, toggleFavorite, hideFavoriteBtn };
=======
export {
  handleFavorite,
  toggleFavoriteBtnIcon as toggleFavoriteIcon,
  showFavoriteCard,
  showBtn,
  hideBtn,
};
>>>>>>> 47116977aec46b6ae04319aa47f467f6122538ac
