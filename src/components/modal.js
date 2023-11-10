export {openPopup, closePopup};


function openPopup(popup) {
popup.classList.add('popup_is-animated');
setTimeout(() => {
  popup.classList.add('popup_is-opened');
  popup.classList.remove('popup_is-animated')
}, 0);

document.addEventListener('keydown', closePopupByEsc);
document.addEventListener('mousedown', closePopupByOverlay);

};


function closePopup(popup) {
  popup.classList.remove('popup_is-animated');
   popup.classList.remove('popup_is-opened');

  document.removeEventListener('keydown', closePopupByEsc);
  document.removeEventListener('mousedown', closePopupByOverlay);
};


function closePopupByEsc(evt) {
  if (evt.key === 'Escape'){
    const popupOpened = document.querySelector('.popup_is-opened')
    closePopup(popupOpened);
  }
};


function closePopupByOverlay(evt) {
  if (evt.target.classList.contains('popup_is-opened')){
    closePopup(evt.target);
  } 
};