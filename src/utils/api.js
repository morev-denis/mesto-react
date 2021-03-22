class Api {
  constructor({ headers, serverUrl }) {
    this._headers = headers;
    this._serverUrl = serverUrl;
  }

  _handleResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  getInitialCards() {
    return fetch(`${this._serverUrl}/cards`, {
      method: "GET",
      headers: this._headers,
    }).then(this._handleResponse);
  }

  getUserInfo() {
    return fetch(`${this._serverUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then(this._handleResponse);
  }

  initData() {
    return Promise.all([this.getInitialCards(), this.getUserInfo()]);
  }

  setUserInfo({ name, about, avatar }) {
    return fetch(`${this._serverUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: `${name}`,
        about: `${about}`,
        avatar: `${avatar}`,
      }),
    }).then(this._handleResponse);
  }

  setLike(id) {
    return fetch(`${this._serverUrl}/cards/likes/${id}`, {
      method: "PUT",
      headers: this._headers,
    }).then(this._handleResponse);
  }

  unsetLike(id) {
    return fetch(`${this._serverUrl}/cards/likes/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._handleResponse);
  }

  changeLikeCardStatus(id, isLiked) {
    if (isLiked) {
      return this.unsetLike(id);
    } else {
      return this.setLike(id);
    }
  }

  addCard({ name, link }) {
    return fetch(`${this._serverUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: `${name}`,
        link: `${link}`,
      }),
    }).then(this._handleResponse);
  }

  deleteCard(data) {
    return fetch(`${this._serverUrl}/cards/${data._id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._handleResponse);
  }

  updateAvatar({ avatar }) {
    return fetch(`${this._serverUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: `${avatar}`,
      }),
    }).then(this._handleResponse);
  }
}

const api = new Api({
  serverUrl: "https://mesto.nomoreparties.co/v1/cohort-20",
  headers: {
    authorization: "6d1b76d0-8a79-4ce2-87f0-35c2e1868bd2",
    "Content-Type": "application/json",
  },
});

export default api;
