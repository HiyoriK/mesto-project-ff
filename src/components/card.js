import{user, putLike, removeLike} from '../scripts/api.js'


const cardTemplate = document.querySelector('#card-template').content;

function createCard(card, deleteCard, toggleCardLike, openImage, originalId) {
  const newCard = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = newCard.querySelector('.card__image');
  const cardTitle = newCard.querySelector('.card__title');
  const cardDeleteButton = newCard.querySelector('.card__delete-button');
  const cardLikeButton = newCard.querySelector('.card__like-button');
  const cardLikeCounter  = newCard.querySelector('.card__like-counter');
  const myPersonalId = '10a6b0e0-042d-42d2-ae9a-432f5cc3ce58';

  cardImage.src = card.link;
  cardImage.alt = card.name;
  cardTitle.textContent = card.name;
  card.id = card['_id'];

  if(card.owner['_id'] != myPersonalId) {
    cardDeleteButton.style.display = 'none';
  }
  else {
    cardDeleteButton.addEventListener('click', (evt) => {
      deleteCard(evt, card.id);
    });
  }


  

  cardLikeButton.addEventListener('click', (evt) => {
    toggleCardLike(evt);
  });

  cardImage.addEventListener('click', openImage);

  return newCard;
}

function deleteCard (evt) {
  const container = evt.target.closest('.card');
  container.remove();
}

function toggleCardLike(evt, cardId) {

  
  //const likesNumber

  if(evt.target.classList.contains('card__like-button_is-active')){
    removeLike(cardId)
    .then((cardData) => {
      evt.target.classList.remove('card__like-button_is-active')
      //like-counter
    
  })
  .catch(console.error);
}
else {
  putLike(cardId)
    .then((cardData) => {
      evt.target.classList.add('card__like-button_is-active')
      //like-counter
    
  })
  .catch(console.error);
}

  evt.target.classList.toggle('card__like-button_is-active');
}

export {createCard, deleteCard, toggleCardLike};





