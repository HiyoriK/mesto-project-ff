import './pages/index.css';
import {popups, profilePopup, profileEditButton, profileEditForm, formNameInput, profileSubmitButton, formDescriptionInput, newCardPopup, addNewCardButton, popupCardImage, popupCaption, popupImage, newCardForm, formPlaceNameInput, formInputUrl, cardSubmitButton, profileName, profileDescription, profileImage, cardsContainer, avatarPopup, avatarEditButton, avatarEditForm, newAvatarUrl, avatarSubmitButton} from './components/constants.js';
//import {initialCards} from './scripts/cards.js';
import {createCard, deleteCard, toggleCardLike} from './components/card.js';
import {openPopup, closePopup} from './components/modal.js';
import {validationConfig, enableValidation, clearValidation} from './scripts/validation.js';
import {user, getUserInfo, getInitialCards, updateProfileInfo, addNewCardToList, deleteServerCard, updateProfileImage} from './scripts/api.js';


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
  profileImage.style.backgroundImage = `url('${data.avatar}')`;
})
.catch(console.error);

getInitialCards()
.then(data => {
  data.forEach(card  => addCard(card, cardsContainer))
})
.catch(console.error);

})

// открытие поп-апов
// поп-ап аватарки
avatarEditButton.addEventListener('click', () => {
  openPopup(avatarPopup);
  clearValidation (avatarEditForm, validationConfig);
  avatarEditForm.reset();
 })

// по-ап профиля

profileEditButton.addEventListener('click', () => {
 openPopup(profilePopup);
 formNameInput.value = profileName.textContent;
 formDescriptionInput.value = profileDescription.textContent;
 clearValidation (profileEditForm, validationConfig);
})

// поп-ап добавления карточки

addNewCardButton.addEventListener('click', () => {
  openPopup(newCardPopup);
  clearValidation (newCardForm, validationConfig);
  newCardForm.reset();
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
  avatarSubmitButton.textContent = 'Сохранение...';
  const newCardContent = {
    name: formPlaceNameInput.value,
    link: formInputUrl.value,
    alt: formPlaceNameInput.value,
  };

  addNewCardToList(newCardContent.name, newCardContent.link)
  .then ((data) => {
    
  addCard(newCardContent, cardsContainer);
  })
  .catch(console.error);
  closePopup(newCardPopup);
  evt.target.reset();
}

newCardForm.addEventListener('submit', addNewCard);

//редактирование данных в профиле

function editProfile(evt) {
  evt.preventDefault();
  profileSubmitButton.textContent = 'Сохранение...';
  updateProfileInfo(formNameInput.value, formDescriptionInput.value)
  .then(data => {
      profileName.textContent = data.name;
      profileDescription.textContent = data.about;
  })
  .catch(console.error)
  closePopup(profilePopup);
}

profileEditForm.addEventListener('submit', editProfile);

//обновление аватарки

function editProfileImage(evt) {
  evt.preventDefault();
  avatarSubmitButton.textContent = 'Сохранение...';
  updateProfileImage(newAvatarUrl)
  .then ((data) => {
    profileImage.style.backgroundImage = `url('${data.avatar}')`;
  })
  .catch(console.error)
  closePopup(avatarPopup);
}

avatarEditForm.addEventListener('submit', editProfileImage);



// валидация всех полей
enableValidation(validationConfig);
