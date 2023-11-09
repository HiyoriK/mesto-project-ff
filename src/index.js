import './pages/index.css';
import {initialCards} from './scripts/cards.js';
import {createCard, deleteCard, toggleCardLike} from './components/card.js';

const cardsContainer = document.querySelector(".places__list");


function addCard(item, itemList) {
  const cardItem = createCard(item, deleteCard, toggleCardLike);
  itemList.append(cardItem);
}

initialCards.forEach( card  => addCard(card, cardsContainer));



