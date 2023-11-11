import './pages/index.css';
import {initialCards} from './scripts/cards.js';
import {createCard, deleteCard, toggleCardLike} from './components/card.js';
import {openPopup, closePopup} from './components/modal.js';

//добавление карточки на страницу

function addCard(item, itemList) {
  const cardItem = createCard(item, deleteCard, toggleCardLike, openPopupImage);
  itemList.prepend(cardItem); //в тз изначально, вроде как, не указывали конкретно, важен ли порядок 6 карточек, изначально выводимых на страницу. Работает, но есть сомнения, оставлять ли в таком виде. На демо-видео они стоят с "Архыза", но по сути, мне кажется, не так и важно как они изначально выводятся: все равно нет никакой сортировки по алфавиту или еще чему. Поправьте меня здесь, пожалуйста, если не права. Переделаю, если нужно.
}

//вывод карточек на страницу
const cardsContainer = document.querySelector(".places__list");

initialCards.forEach( card  => addCard(card, cardsContainer));

// открытие поп-апов
// по-ап профиля
const profilePopup = document.querySelector('.popup_type_edit');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileEditForm = document.forms['edit-profile'];
const formNameInput = profileEditForm.elements.name;
const formDescriptionInput = profileEditForm.elements.description;

profileEditButton.addEventListener('click', () => {
 openPopup(profilePopup);

 formNameInput.value = profileName.textContent;
 formDescriptionInput.value = profileDescription.textContent;
})

// поп-ап добавления карточки
const newCardPopup = document.querySelector('.popup_type_new-card');
const addNewCardButton = document.querySelector('.profile__add-button');

addNewCardButton.addEventListener('click', () => {
  openPopup(newCardPopup);
})

//поп-ап открытия изображения по клику на карточку
// здесь пришлось удалить(пока закомментить) альты в объектах изначальных карточек и оставить попап таким(с одинаковыми тайлтом и альтом). если вытащить карточку, разбив тайтл и альт в попапе, то выходит очень много лишнего. И т.к. полный альт описания сработает только для изначальных карточек, потому что к новым нет возможности ввести описание все равно, = бессмысленно вообще что-то разбивать -_-
// только здесь дошло, почему в предыдущем спринте не было изначально альтов у объектов....

const popupCardImage = document.querySelector('.popup_type_image');
const popupCaption = popupCardImage.querySelector('.popup__caption');
const popupImage = popupCardImage.querySelector('.popup__image');

function openPopupImage (evt) {
 popupImage.src = evt.target.src;
 popupImage.alt = evt.target.alt;
 popupCaption.textContent = evt.target.alt;

  openPopup(popupCardImage);
}

//закрытие поп-апов по кнопке в окне
const closeButtonsList = document.querySelectorAll('.popup__close');

function closePopupbyX(evt) {
  const popup = evt.target.closest('.popup');
  closePopup(popup);
}

closeButtonsList.forEach((btn) => {
  btn.addEventListener('click', closePopupbyX);
});

//длбавление новой карточки
const newCardform = document.forms['new-place'];
const formPlaceNameInput = newCardform.elements['place-name'];
const formInputUrl = newCardform.elements.link;

function addNewCard(evt) {
  evt.preventDefault();

  const newCardContent = {
    name: formPlaceNameInput.value,
    link: formInputUrl.value,
    alt: formPlaceNameInput.value,
  };

  addCard(newCardContent, cardsContainer);
  closePopup(newCardPopup);
}

newCardform.addEventListener('submit', addNewCard);

//редактирование данных в профиле

const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

function editProfile(evt) {
  evt.preventDefault();

  profileName.textContent = formNameInput.value;
  profileDescription.textContent = formDescriptionInput.value;

  closePopup(profilePopup);
}

profileEditForm.addEventListener('submit', editProfile);
