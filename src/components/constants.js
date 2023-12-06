const popups = document.querySelectorAll('.popup'); 

const profilePopup = document.querySelector('.popup_type_edit');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileEditForm = document.forms['edit-profile'];
const formNameInput = profileEditForm.elements.name;
const formDescriptionInput = profileEditForm.elements.description;

const newCardPopup = document.querySelector('.popup_type_new-card');
const addNewCardButton = document.querySelector('.profile__add-button');

const popupCardImage = document.querySelector('.popup_type_image');
const popupCaption = popupCardImage.querySelector('.popup__caption');
const popupImage = popupCardImage.querySelector('.popup__image');

const newCardform = document.forms['new-place'];
const formPlaceNameInput = newCardform.elements['place-name'];
const formInputUrl = newCardform.elements.link;

const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileImage = document.querySelector('.profile__image');

const avatarPopup = document.querySelector('.popup_type_edit-avatar');
const avatarEditButton = document.querySelector('.profile__image-edit-button');
const avatartEditForm = document.forms['edit-avatar'];
const newAvatarUrl = avatartEditForm.elements.link;

const cardsContainer = document.querySelector(".places__list");

export {popups, profilePopup, profileEditButton, profileEditForm, formNameInput, formDescriptionInput, newCardPopup, addNewCardButton, popupCardImage, popupCaption, popupImage, newCardform, formPlaceNameInput, formInputUrl, profileName, profileDescription, profileImage, avatarPopup, avatarEditButton, avatartEditForm, newAvatarUrl, cardsContainer};