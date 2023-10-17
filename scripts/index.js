//Шабон карточки и контейнер
const cardsContainer = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;

//Создание карточки
function createCard(card, deleteCard) {
 const newCard = cardTemplate.querySelector('.card').cloneNode(true);
 const cardImage = newCard.querySelector('.card__image');
 const cardTitle = newCard.querySelector('.card__title');
 const cardDeleteButton =  newCard.querySelector('.card__delete-button');

  cardImage.src = card.link;
  cardImage.alt = card.alt;
  cardTitle.textContent = card.name;
  cardDeleteButton.addEventListener('click', (evt) => {
      
    deleteCard(evt);
    });

  return newCard;
}

//Добавление карточки
function addCard(item, itemList) {
  const cardItem = createCard(item, deleteCard);
  itemList.append(cardItem);
}

//Удаление карточки
function deleteCard(evt) {
  const container = evt.target.closest('.card');
  container.remove();
}

//Вывод карточек на страницу
initialCards.forEach((card)  => {addCard(card, cardsContainer)});
