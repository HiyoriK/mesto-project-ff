import "./pages/index.css";
import {
  popups,
  profilePopup,
  profileEditButton,
  profileEditForm,
  formNameInput,
  profileSubmitButton,
  formDescriptionInput,
  newCardPopup,
  addNewCardButton,
  popupCardImage,
  popupCaption,
  popupImage,
  newCardForm,
  formPlaceNameInput,
  formInputUrl,
  cardSubmitButton,
  profileName,
  profileDescription,
  profileImage,
  cardsContainer,
  avatarPopup,
  avatarEditButton,
  avatarEditForm,
  newAvatarUrl,
  avatarSubmitButton,
} from "./scripts/constants.js";
import { createCard, deleteCard, toggleCardLike } from "./components/card.js";
import { openPopup, closePopup, closePopupByClick } from "./components/modal.js";
import {
  enableValidation,
  clearValidation,
} from "./scripts/validation.js";
import {
  config,
  getUserInfo,
  getInitialCards,
  updateProfileInfo,
  addNewCardToList,
  deleteServerCard,
  updateProfileImage,
} from "./scripts/api.js";

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

//добавление карточки на страницу

function addCard(item, itemList) {
  const cardItem = createCard(
    item,
    deleteCard,
    toggleCardLike,
    openPopupImage,
    userId
  );
  itemList.prepend(cardItem);
}

//вывод данных с сервера
let userId= "";
const promises = [getUserInfo(), getInitialCards()];

Promise.all(promises)
.then(([getUserInfo, getInitialCards]) => {
  userId = getUserInfo["_id"];
        formNameInput.textContent = getUserInfo.name;
        formDescriptionInput.textContent = getUserInfo.about;
        profileImage.style.backgroundImage = `url('${getUserInfo.avatar}')`;
        getInitialCards.forEach((card) => addCard(card, cardsContainer));
})
.catch(console.error);


// открытие поп-апов
// поп-ап аватарки
avatarEditButton.addEventListener("click", () => {
  openPopup(avatarPopup);
  clearValidation(avatarEditForm, validationConfig);
  avatarEditForm.reset();
});

// по-ап профиля

profileEditButton.addEventListener("click", () => {
  openPopup(profilePopup);
  formNameInput.value = profileName.textContent;
  formDescriptionInput.value = profileDescription.textContent;
  clearValidation(profileEditForm, validationConfig);
});

// поп-ап добавления карточки

addNewCardButton.addEventListener("click", () => {
  openPopup(newCardPopup);
  clearValidation(newCardForm, validationConfig);
  newCardForm.reset();
});

//поп-ап открытия изображения по клику на карточку

function openPopupImage(evt) {
  popupImage.src = evt.target.src;
  popupImage.alt = evt.target.alt;
  popupCaption.textContent = evt.target.alt;

  openPopup(popupCardImage);
}

//закрытие поп-апов
popups.forEach((popup) => {
  popup.addEventListener('mousedown', closePopupByClick )
});

//длбавление новой карточки

function addNewCard(evt) {
  evt.preventDefault();
  cardSubmitButton.textContent = "Сохранение...";
  
  addNewCardToList(formPlaceNameInput.value, formInputUrl.value)
    .then((item) => {
      cardsContainer.prepend(createCard(
        item,
        deleteCard,
        toggleCardLike,
        openPopupImage,
        userId

      ))
      closePopup(newCardPopup);
    })
    .catch(console.error)
    .finally(() => {
      profileSubmitButton.textContent = "Сохранить";
    });
  
  evt.target.reset();
}

newCardForm.addEventListener("submit", addNewCard);

//редактирование данных в профиле

function editProfile(evt) {
  evt.preventDefault();
  profileSubmitButton.textContent = "Сохранение...";
  updateProfileInfo(formNameInput.value, formDescriptionInput.value)
    .then((data) => {
      profileName.textContent = data.name;
      profileDescription.textContent = data.about;
      closePopup(profilePopup);
    })
    .catch(console.error)
    .finally(() => {
      profileSubmitButton.textContent = "Сохранить";
    });
}

profileEditForm.addEventListener("submit", editProfile);

//обновление аватарки
// пока не работает, починить
function editProfileImage(evt) {
  evt.preventDefault();
  avatarSubmitButton.textContent = "Сохранение...";
  updateProfileImage(newAvatarUrl)
    .then((data) => {
      profileImage.style.backgroundImage = `url('${data.avatar}')`;
      closePopup(avatarPopup);
    })
    .catch(console.error)
    .finally(() => {
      profileSubmitButton.textContent = "Сохранить";
    });
  
}

avatarEditForm.addEventListener("submit", editProfileImage);

// валидация всех полей
enableValidation(validationConfig);


