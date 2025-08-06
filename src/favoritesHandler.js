function toggleFavoriteIcon(isFavorite, btn) {
  btn.classList.toggle("fa", isFavorite);
  btn.classList.toggle("far", !isFavorite);
}

function showFavoriteCard(quote, author, container) {
  const favoriteCard = document.createElement("div");
  favoriteCard.classList.add("favorite-card");
  favoriteCard.innerHTML = `
          <p>${quote}</p>
          <p class='author'>${author}</p>
          `;
  container.appendChild(favoriteCard);
}

function hideFavoriteCard(quote) {
  const favoriteCards = document.querySelectorAll(".favorite-card");
  favoriteCards.forEach((card) => {
    if (card.textContent.includes(quote)) {
      card.remove();
    }
  });
}

export { toggleFavoriteIcon, showFavoriteCard, hideFavoriteCard };
