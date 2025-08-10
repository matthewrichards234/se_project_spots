class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
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

  getUserInfo() {
    // initialize user.name from json obj.
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
    });
  }

  updateUserInfo() {}

  updateAvatar() {}
}

export default Api;
