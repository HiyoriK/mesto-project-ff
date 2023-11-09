import './pages/index.css';
import {initialCards} from './scripts/cards.js';
import {createCard, deleteCard, toggleCardLike} from './components/card.js';
import {openPopup, closePopup} from './components/modal.js';

const cardsContainer = document.querySelector(".places__list");
const profilePopup = document.querySelector('.popup_type_edit');
const profileEditButton = document.querySelector('.profile__edit-button')


function addCard(item, itemList) {
  const cardItem = createCard(item, deleteCard, toggleCardLike);
  itemList.append(cardItem);
}

initialCards.forEach( card  => addCard(card, cardsContainer));


profileEditButton.addEventListener('click', () => {
 openPopup(profilePopup);
})

function closePopupbyX(evt) {
  const popup = evt.target.closest('.popup');
  closePopup(popup);


};

