export { createCard, deleteCard, toggleCardLike};


const cardTemplate = document.querySelector('#card-template').content;

function createCard(card, deleteCard, toggleCardLike, openImage) {
  const newCard = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = newCard.querySelector('.card__image');
  const cardTitle = newCard.querySelector('.card__title');
  const cardDeleteButton = newCard.querySelector('.card__delete-button');
  const cardLikeButton = newCard.querySelector('.card__like-button');

  cardImage.src = card.link;
  cardImage.alt = card.alt;
  cardTitle.textContent = card.name;


  cardDeleteButton.addEventListener('click', (evt) => {
    deleteCard(evt);
  });

  cardLikeButton.addEventListener('click', (evt) => {
    toggleCardLike(evt);
  });

  cardImage.addEventListener('click', openImage);

  return newCard;
}

function deleteCard(evt) {
  const container = evt.target.closest('.card');
  container.remove();
}

function toggleCardLike(evt) {
  evt.target.classList.toggle('card__like-button_is-active');
}



