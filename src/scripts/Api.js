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

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    }).then(this._handleServerResponse);
  }
}

export default Api;
