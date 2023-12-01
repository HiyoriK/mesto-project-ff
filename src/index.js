import './pages/index.css';
import {popups, profilePopup, profileEditButton, profileEditForm, formNameInput, formDescriptionInput, newCardPopup, addNewCardButton, popupCardImage, popupCaption, popupImage, newCardform, formPlaceNameInput, formInputUrl, profileName, profileDescription} from './components/constants.js';
import {initialCards} from './scripts/cards.js';
import {createCard, deleteCard, toggleCardLike} from './components/card.js';
import {openPopup, closePopup} from './components/modal.js';

//добавление карточки на страницу

function addCard(item, itemList) {
  const cardItem = createCard(item, deleteCard, toggleCardLike, openPopupImage);
  itemList.prepend(cardItem);
}

//вывод карточек на страницу
const cardsContainer = document.querySelector(".places__list");

initialCards.forEach( card  => addCard(card, cardsContainer));

// открытие поп-апов
// по-ап профиля

profileEditButton.addEventListener('click', () => {
 openPopup(profilePopup);

 formNameInput.value = profileName.textContent;
 formDescriptionInput.value = profileDescription.textContent;
})

// поп-ап добавления карточки

addNewCardButton.addEventListener('click', () => {
  openPopup(newCardPopup);
})

//поп-ап открытия изображения по клику на карточку

function openPopupImage (evt) {
 popupImage.src = evt.target.src;
 popupImage.alt = evt.target.alt;
 popupCaption.textContent = evt.target.alt;

  openPopup(popupCardImage);
}

//закрытие поп-апов
popups.forEach((popup) => {
 popup.addEventListener('mousedown', (evt) => {
  if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close')) {
   closePopup(popup);
  }
 });
});

//длбавление новой карточки

function addNewCard(evt) {
  evt.preventDefault();

  const newCardContent = {
    name: formPlaceNameInput.value,
    link: formInputUrl.value,
    alt: formPlaceNameInput.value,
  };

  addCard(newCardContent, cardsContainer);
  closePopup(newCardPopup);
  evt.target.reset();
}

newCardform.addEventListener('submit', addNewCard);

//редактирование данных в профиле

function editProfile(evt) {
  evt.preventDefault();

  profileName.textContent = formNameInput.value;
  profileDescription.textContent = formDescriptionInput.value;

  closePopup(profilePopup);
}

profileEditForm.addEventListener('submit', editProfile);
