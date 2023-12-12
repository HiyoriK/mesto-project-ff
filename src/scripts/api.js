const config = {
  userUrl: "https://nomoreparties.co/v1/wff-cohort-1",
  headers: {
    authorization: "10a6b0e0-042d-42d2-ae9a-432f5cc3ce58",
    "Content-type": "application/json",
  },
};

const getUserInfo = async () => {
  return fetch(config.userUrl + "/users/me", {
    headers: config.headers,
  }).then(getResponse);
};

const getInitialCards = async () => {
  return fetch(config.userUrl + "/cards", {
    headers: config.headers,
  }).then(getResponse);
};

const updateProfileInfo = async (userName, userDescription) => {
  return fetch(config.userUrl + "/users/me", {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: userName,
      about: userDescription,
    }),
  }).then(getResponse);
};

const updateProfileImage = async (url) => {
  return fetch(config.userUrl + "/users/me/avatar", {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: url,
    }),
  }).then(getResponse);
};

const addNewCardToList = async (cardTitle, cardUrl) => {
  return fetch(config.userUrl + "/cards", {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: cardTitle,
      link: cardUrl,
    }),
  }).then(getResponse);
};

const putLike = async (cardId) => {
  return fetch(config.userUrl + `/cards/likes/${cardId}`, {
    method: "PUT",
    headers: config.headers,
  }).then(getResponse);
};

const removeLike = async (cardId) => {
  return fetch(config.userUrl + `/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(getResponse);
};

const deleteServerCard = async (cardId) => {
  return fetch(config.userUrl + `/cards/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(getResponse);
};

const getResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

export {
  config,
  getUserInfo,
  getInitialCards,
  updateProfileInfo,
  addNewCardToList,
  putLike,
  removeLike,
  deleteServerCard,
  updateProfileImage,
};
