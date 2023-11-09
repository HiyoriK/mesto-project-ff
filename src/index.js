import './pages/index.css';
import {initialCards} from './scripts/cards.js';
import {createCard, deleteCard, toggleCardLike} from './components/card.js';
import {openPopup, closePopup} from './components/modal.js';

const cardsContainer = document.querySelector(".places__list");

const profilePopup = document.querySelector('.popup_type_edit');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileEditForm = document.forms['edit-profile'];
const formNameInput = profileEditForm.elements.name;
const formDescriptionInput = profileEditForm.elements.description;
const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const closeButtonsList = document.querySelectorAll('.popup__close');

const newCardPopup = document.querySelector('.popup_type_new-card');
const addNewCardButton = document.querySelector('.profile__add-button');
const newCardform = document.forms['new-place'];
const formPlaceNameInput = newCardform.elements['place-name'];
const formLinkInput = newCardform.elements.link;



function addCard(item, itemList) {
  const cardItem = createCard(item, deleteCard, toggleCardLike);
  itemList.append(cardItem);
}

initialCards.forEach( card  => addCard(card, cardsContainer));


profileEditButton.addEventListener('click', () => {
 openPopup(profilePopup);
 formNameInput.value = profileName.textContent;
 formDescriptionInput.value = profileDescription.textContent;
})

addNewCardButton.addEventListener('click', () => {
  openPopup(newCardPopup);
})

// здесь написать редактировнаие профиля
// здесь - открытие и закрытие фото по клику

function closePopupbyX(evt) {
  const popup = evt.target.closest('.popup');
  closePopup(popup);
};

closeButtonsList.forEach((btn) => {
  btn.addEventListener('click', closePopupbyX);
});

//  не отправляется . подумать...
//function addNewCard(evt) {
//  evt.preventDefault();
//
//  const newCardContent = {
//    name: formPlaceNameInput.value,
//    link: formLinkInput.value,
//  };
//
//  addCard(item, itemList);
//
//  closePopup(newCardPopup)
//};
//
//newCardform.addEventListener('submit', addNewCard);
