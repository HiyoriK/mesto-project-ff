import { config, putLike, removeLike } from "../scripts/api.js";

const cardTemplate = document.querySelector("#card-template").content;

function createCard(card, deleteCard, toggleCardLike, openImage, userId) {
  const newCard = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = newCard.querySelector(".card__image");
  const cardTitle = newCard.querySelector(".card__title");
  const cardDeleteButton = newCard.querySelector(".card__delete-button");
  const cardLikeButton = newCard.querySelector(".card__like-button");
  const likesCounter = newCard.querySelector(".card__like-counter");
  

  cardImage.src = card.link;
  cardImage.alt = card.name;
  cardTitle.textContent = card.name;
  likesCounter.textContent = card.likes.length;
  newCard.id = card["_id"];

  if (card.owner["_id"] != userId) {
    cardDeleteButton.style.display = "none";
  } else {
    cardDeleteButton.addEventListener("click", (evt) => {
      deleteCard(evt, newCard.id);
    });
  }

  const hasLike = card.likes.some ((i) => i === userId);
  if(hasLike){
    cardLikeButton.classList.add("card__like-button_is-active");
  }

  cardLikeButton.addEventListener("click", (evt) => {
    toggleCardLike(evt, newCard.id, likesCounter);
  });

  cardImage.addEventListener("click", openImage);

  return newCard;
}

function deleteCard(evt) {
  const container = evt.target.closest(".card");
  container.remove();
}


function toggleCardLike(evt, cardId, counter) {
  const likeMethod = evt.target.classList.contains("card__like-button_is-active")
  ? removeLike
  : putLike;
   likeMethod(cardId) 
        .then((cardData) => { 
          evt.target.classList.toggle("card__like-button_is-active"); 
          counter.textContent = cardData.likes.length; 
        }) 
        .catch(console.error); 
}

export { createCard, deleteCard, toggleCardLike };
