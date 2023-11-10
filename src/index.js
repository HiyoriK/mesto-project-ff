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
const formInputUrl = newCardform.elements.link;

const popupCardImage = document.querySelector('.popup_type_image');
const popupCaption = popupCardImage.querySelector('.popup__caption');
const popupImage = popupCardImage.querySelector('.popup__image')


function addCard(item, itemList) {
  const cardItem = createCard(item, deleteCard, toggleCardLike, openPopupImage);
  itemList.prepend(cardItem); //в тз изначально, вроде как, не указывали конкретно, важен ли порядок 6 карточек, изначально выводимых на страницу. Работает, но есть сомнения, оставлять ли в таком виде. На демо-видео они стоят с "Архыза", но по сути, мне кажется, не так и важно как они изначально выводятся: все равно нет никакой сортировки по алфавиту или еще чему. Поправьте меня здесь, пожалуйста, если не права. Переделаю, если нужно.
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

function openPopupImage(evt) {

  popupImage.src = evt.target.src;
  popupImage.alt = evt.target.alt;
  popupCaption.textContent = evt.target.name;

  openPopup(popupCardImage);

}


function closePopupbyX(evt) {
  const popup = evt.target.closest('.popup');
  closePopup(popup);
}

closeButtonsList.forEach((btn) => {
  btn.addEventListener('click', closePopupbyX);
});

// решить проблему с подгрузкой картинки
function addNewCard(evt) {
  evt.preventDefault();

  const newCardContent = {
    name: formPlaceNameInput.value,
    link: formInputUrl.value,
    alt: formPlaceNameInput.value,
  };

  addCard(newCardContent, cardsContainer);
  closePopup(newCardPopup)
}

function editProfile(evt) {
  evt.preventDefault();

  profileName.textContent = formNameInput.value;
  profileDescription.textContent = formDescriptionInput.value;

  closePopup(profilePopup);
}


newCardform.addEventListener('submit', addNewCard);
profileEditForm.addEventListener('submit', editProfile);
