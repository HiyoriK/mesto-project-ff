// const validationConfig = {
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__button',
//   inactiveButtonClass: 'popup__button_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible'
// };

 const showError = (formElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  input.classList.add('popup__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__error_visible');
 };
 
 const hideError = (formElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  input.classList.remove('popup__input_type_error');
  errorElement.textContent = '';
  errorElement.classList.remove('popup__error_visible');
 };

const checkInputValidity = (formElement, inputElement) => {
  if(!inputElement.validity.valid){
    showError(formElement, inputElement.validationMessage);
  }
  else {
    hideError(formElement);
  }
 }

function setEventListeners (formElement) {
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  inputList.forEach((inputElement) => {
  inputElement.addEventListener('input', function () {
    checkInputValidity(formElement, inputElement);
  });
});
}

function enableValidation () {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });

    setEventListeners(formElement);
});
}

enableValidation();

function hasInvalidInput (inputList) {

  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

function toggleButtonState (inputList, buttonElement) {
  if(hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__button_disabled')
  }
  else{
    buttonElement.classList.remove('popup__button_disabled')
  }
};