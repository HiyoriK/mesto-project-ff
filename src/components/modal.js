function openPopup(popup) {
popup.classList.add('popup_is-animated');
setTimeout(() => {
  popup.classList.add('popup_is-opened');
  popup.classList.remove('popup_is-animated')
}, 0);

document.addEventListener('keydown', closePopupByEsc);
};

function closePopup(popup) {
  popup.classList.add('popup_is-animated');
  setTimeout(() => {
   popup.classList.remove('popup_is-opened');
  }, 0);

  document.removeEventListener('keydown', closePopupByEsc);
};


function closePopupByEsc(evt) {
  if (evt.key === 'Escape'){
    closePopup(document.querySelector('.popup_is-opened'));
  }
};


export {openPopup, closePopup};