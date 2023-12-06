const user = {
userUrl: 'https://nomoreparties.co/v1/wff-cohort-1', 
headers: {
    authorization: '10a6b0e0-042d-42d2-ae9a-432f5cc3ce58',
    'Content-type': 'application/json',
  }
}

const getUserInfo = async () => {
  return fetch(user.userUrl + '/users/me', {
    headers: user.headers,
  })
  .then(getResponse); 
}

const getInitialCards = async () => {
  return fetch(user.userUrl + '/cards', {
    headers: user.headers,
  })
  .then(getResponse);
}

const updateProfileInfo = async (userName, userDescription) => {
  return fetch(user.userUrl + '/users/me', {
    method: 'PATCH',
    headers: user.headers,
    body:JSON.stringify({
      name: userName,
      about: userDescription
    })
  })
  .then(getResponse);
}

const addNewCardToList = async (cardTitle, cardUrl) => {
  return fetch (user.userUrl + '/cards', {
    method: 'POST',
    headers: user.headers,
    body:JSON.stringify({
      name: cardTitle,
      link: cardUrl
    })
  })
  .then(getResponse);
}

const putLike = async (cardId) => {
  return fetch (user.userUrl + `/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: user.headers,
  })
  .then(getResponse);
}

const removeLike = async (cardId) => {
  return fetch (user.userUrl + `/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: user.headers,
  })
  .then(getResponse);
}

const deleteServerCard = async (cardId) => {
  return fetch (user.userUrl + `/cards/${cardId}`, {
    method: 'DELETE',
    headers: user.headers,
  })
  .then(getResponse);
}



const getResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}


export {user, getUserInfo, getInitialCards, updateProfileInfo, addNewCardToList, putLike, removeLike, deleteServerCard}