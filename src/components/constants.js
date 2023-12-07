const popups = document.querySelectorAll('.popup'); 

const profilePopup = document.querySelector('.popup_type_edit');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileEditForm = document.forms['edit-profile'];
const formNameInput = profileEditForm.elements.name;
const formDescriptionInput = profileEditForm.elements.description;
const profileSubmitButton = profileEditForm.querySelector('.popup__button');

const newCardPopup = document.querySelector('.popup_type_new-card');
const addNewCardButton = document.querySelector('.profile__add-button');

const popupCardImage = document.querySelector('.popup_type_image');
const popupCaption = popupCardImage.querySelector('.popup__caption');
const popupImage = popupCardImage.querySelector('.popup__image');

const newCardForm = document.forms['new-place'];
const formPlaceNameInput = newCardForm.elements['place-name'];
const formInputUrl = newCardForm.elements.link;
const cardSubmitButton = newCardForm.querySelector('.popup__button');

const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileImage = document.querySelector('.profile__image');

const avatarPopup = document.querySelector('.popup_type_edit-avatar');
const avatarEditButton = document.querySelector('.profile__edit-avatar-button');
const avatarEditForm = document.forms['edit-avatar'];
const newAvatarUrl = avatarEditForm.elements.link;
const avatarSubmitButton = avatarEditForm.querySelector('.popup__button');

const cardsContainer = document.querySelector('.places__list');

export {popups, profilePopup, profileEditButton, profileEditForm, formNameInput, profileSubmitButton, formDescriptionInput, newCardPopup, addNewCardButton, popupCardImage, popupCaption, popupImage, newCardForm, formPlaceNameInput, formInputUrl, cardSubmitButton, profileName, profileDescription, profileImage, avatarPopup, avatarEditButton, avatarEditForm, newAvatarUrl, avatarSubmitButton, cardsContainer};