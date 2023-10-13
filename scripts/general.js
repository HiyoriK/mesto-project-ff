const cardsConrainer = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').textContent;

function createCard(card){
  const newCard = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = newCard.querySelector('.card__image');
  const cardTitle = newCard.querySelector('.card__title');
  const cardDeleteButton = newCard.querySelector('.card__delete-button');

  return newCard;
}