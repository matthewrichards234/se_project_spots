import { apiKey } from "../scripts/apiKey.js";

class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers; // Where authorization token should go.
  }

  // This method receives the fetch response object (`res`) automatically
  // because it's passed by `.then()` when handling the promise.
  // It checks if the response is OK, then returns parsed JSON,
  // otherwise rejects with an error message.
  _handleServerResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  // This method makes a fetch request to our baseUrl and returns a promise.
  // It sends headers (like extra info like authorization tokens or content type in the HTTP request.)
  // and then checks and parses the response using _handleServerResponse.
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    }).then(this._handleServerResponse);
  }

  createCard({ name, link }) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name,
        link,
      }),
    }).then(this._handleServerResponse);
  }

  likeCard() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "PUT",
      headers: this._headers,
    }).then(this._handleServerResponse);
  }

  deleteCard() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "DELETE",
      headers: this._headers,
    });
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
    })
      .then(this._handleServerResponse)
      .catch((error) => {
        console.error(`Error: ${error.status}`);
      });
  }

  updateUserInfo(userInfo) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: userInfo.name,
        about: userInfo.about,
      }),
    }).then(this._handleServerResponse);
    // Update user info:
    // .then
    // // Previous then block successfully gets user info.
    // ()
  }

  updateAvatar(userInfo) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: userInfo.avatar,
      }),
    }).then(this._handleServerResponse);
  }
}

export default Api;
