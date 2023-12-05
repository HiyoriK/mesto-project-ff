const user = {
userUrl: 'https://nomoreparties.co/v1/wff-cohort-1/cards', 
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
  return fetch(user.userUrl = '/cards', {
    headers: user.headers,
  })
  .then(getResponse);
}

const getResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}


export {user, getUserInfo, getInitialCards}