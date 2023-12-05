import './pages/index.css';
import {popups, profilePopup, profileEditButton, profileEditForm, formNameInput, formDescriptionInput, newCardPopup, addNewCardButton, popupCardImage, popupCaption, popupImage, newCardform, formPlaceNameInput, formInputUrl, profileName, profileDescription, cardsContainer} from './components/constants.js';
import {initialCards} from './scripts/cards.js';
import {createCard, deleteCard, toggleCardLike} from './components/card.js';
import {openPopup, closePopup} from './components/modal.js';
import {validationConfig, enableValidation, clearValidation} from './scripts/validation.js';
import {user, getUserInfo, getInitialCards} from './scripts/api.js';
//добавление карточки на страницу

function addCard(item, itemList) {
  const cardItem = createCard(item, deleteCard, toggleCardLike, openPopupImage, originalId);
  itemList.prepend(cardItem);
}

//вывод данных с сервера
let originalId = '';
const promises = [getUserInfo, getInitialCards]

Promise.all(promises)
.then(() => {

getUserInfo()
.then(data => {
  originalId = data['_id'];
  formNameInput.textContent = data.name;
  formDescriptionInput.textContent = data.about;
  //аватарка
})
.catch(console.error);

getInitialCards()
.then(data => {
  data.forEach(card  => addCard(card, cardsContainer))
})
.catch(console.error);

})

// открытие поп-апов
// по-ап профиля

profileEditButton.addEventListener('click', () => {
 openPopup(profilePopup);

 formNameInput.value = profileName.textContent;
 formDescriptionInput.value = profileDescription.textContent;
 clearValidation (formElement, validationConfig);
})

// поп-ап добавления карточки

addNewCardButton.addEventListener('click', () => {
  openPopup(newCardPopup);
  clearValidation (formElement, validationConfig);
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

// валидация всех полей
enableValidation(validationConfig);
