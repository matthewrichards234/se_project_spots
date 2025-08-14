import "./index.css";
import {
  enableValidation,
  resetValidation,
  settings,
  toggleButtonState,
} from "../scripts/validation.js";

import Api from "../scripts/Api.js";
import { apiKey } from "../scripts/apiKey.js";

// --------------------
// DOM SELECTORS
// --------------------
const editProfileBtn = document.querySelector(".profile__edit-btn");
const addPostBtn = document.querySelector(".profile__add-btn");

const editProfileModal = document.querySelector("#edit-profile-modal");
const addPostModal = document.querySelector("#new-post-modal");
const editAvatarModal = document.querySelector("#edit-avatar-modal");
const deletePostModal = document.querySelector("#delete-post-modal");
const previewModal = document.querySelector("#preview-modal");

const editModalForm = editProfileModal.querySelector(".modal__form");
const addModalForm = addPostModal.querySelector(".modal__form");
const avatarInput = document.querySelector("#avatar-link-input");

const deleteSubmit = deletePostModal.querySelector(".modal__submit-btn_delete");
const deleteCancel = deletePostModal.querySelector(".modal__submit-btn_cancel");

const profileNameEl = document.querySelector("#profile-name");
const profileDescriptionEl = document.querySelector("#profile-description");
const inputName = document.querySelector("#profile-name-input");
const inputDescription = document.querySelector("#profile-description-input");
const inputCardLink = document.querySelector("#image-link-input");
const inputCardTitle = document.querySelector("#image-caption-input");
const profileAvatarEl = document.querySelector(".profile__avatar");
const editAvatarBtn = document.querySelector(".profile__edit-avatar");

const previewImageEl = previewModal.querySelector(".modal__image");
const previewCaptionEl = previewModal.querySelector(".modal__caption");

const cardTemplate = document.querySelector("#template");
const cardList = document.querySelector(".cards__list");

// --------------------
// DELETE CARD DATA
// --------------------

let selectedCard, selectedCardId;

// --------------------
// API INSTANCE
// --------------------
const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: apiKey,
    "Content-Type": "application/json",
  },
});

// --------------------
// MODAL HANDLING
// --------------------
const openModal = (modal) => {
  modal.classList.add("modal_is-opened");
  document.addEventListener("keydown", handleEscapeClose);
  modal.addEventListener("click", handleClickClose);
};

const closeModal = (modal) => {
  modal.classList.remove("modal_is-opened");
  document.removeEventListener("keydown", handleEscapeClose);
  modal.removeEventListener("click", handleClickClose);
};

const handleEscapeClose = (e) => {
  const modal = document.querySelector(".modal_is-opened");
  if (e.key === "Escape" && modal) {
    closeModal(modal);
    if (modal === addPostModal) addModalForm.reset();
  }
};

const handleClickClose = (e) => {
  const modal = document.querySelector(".modal_is-opened");
  if (e.target.classList.contains("modal_is-opened")) {
    closeModal(modal);
    if (modal === addPostModal) addModalForm.reset();
  }
};

// --------------------
// CARD FUNCTIONS
// --------------------
const getCardElement = (data) => {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardTitle = cardElement.querySelector(".card__title");
  const cardImg = cardElement.querySelector(".card__image");
  const cardLikeBtn = cardElement.querySelector(".card__like-btn");
  const cardDeleteBtn = cardElement.querySelector(".card__delete-btn");

  cardTitle.textContent = data.name;
  cardImg.src = data.link;
  cardImg.alt = data.name;

  cardLikeBtn.addEventListener("click", () => {
    cardLikeBtn.classList.toggle("card__like-btn_clicked");
  });

  cardDeleteBtn.addEventListener("click", (evt) =>
    handleDeleteCard(cardElement, data._id)
  );

  cardImg.addEventListener("click", () => {
    previewCaptionEl.textContent = data.name;
    previewImageEl.src = data.link;
    previewImageEl.alt = data.name;
    openModal(previewModal);
  });

  return cardElement;
};

const renderCard = (cardData, prepend = false) => {
  const cardElement = getCardElement(cardData);
  if (prepend) {
    cardList.prepend(cardElement);
  } else {
    cardList.append(cardElement);
  }
};

// --------------------
// FORM HANDLERS
// --------------------
const handleProfileFormSubmit = (e) => {
  e.preventDefault();
  const userInfo = {
    name: inputName.value,
    about: inputDescription.value,
  };

  api
    .updateUserInfo(userInfo)
    .then((updated) => {
      profileNameEl.textContent = updated.name;
      profileDescriptionEl.textContent = updated.about;
      closeModal(editProfileModal);
    })
    .catch(console.error);
};

const handleAvatarFormSubmit = (e) => {
  e.preventDefault();
  const userAvatar = { avatar: avatarInput.value };

  api
    .updateAvatar(userAvatar)
    .then((updated) => {
      profileAvatarEl.src = updated.avatar;
      closeModal(editAvatarModal);
    })
    .catch(console.error);
};

const handleAddCardSubmit = (e) => {
  e.preventDefault();
  const cardData = {
    link: inputCardLink.value,
    name: inputCardTitle.value,
  };

  api
    .createCard(cardData)
    .then((newCard) => {
      renderCard(newCard, true);
      closeModal(addPostModal);
      addModalForm.reset();
      toggleButtonState(
        addModalForm,
        addPostModal.querySelector(".modal__submit-btn"),
        settings
      );
    })
    .catch(console.error);
};

const handleDeleteSubmit = (evt) => {
  evt.preventDefault();
  api
    .deleteCard(selectedCardId)
    .then(() => {
      selectedCard.remove();
      closeModal(deletePostModal);
    })
    .catch(console.error);
};

const handleDeleteCard = (cardElement, cardId) => {
  selectedCard = cardElement;
  selectedCardId = cardId;
  openModal(deletePostModal);
};

// --------------------
// DATA LOADING
// --------------------
const loadUserInfo = () => {
  api
    .getUserInfo()
    .then((data) => {
      profileNameEl.textContent = data.name;
      profileDescriptionEl.textContent = data.about;
      profileAvatarEl.src = data.avatar;
    })
    .catch(console.error);
};

const loadInitialCards = () => {
  api
    .getInitialCards()
    .then((cards) => cards.forEach((card) => renderCard(card)))
    .catch(console.error);
};

// --------------------
// EVENT LISTENERS
// --------------------
editProfileBtn.addEventListener("click", () => {
  inputName.value = profileNameEl.textContent;
  inputDescription.value = profileDescriptionEl.textContent.trim();
  resetValidation(editModalForm, settings);
  openModal(editProfileModal);
});

addPostBtn.addEventListener("click", () => openModal(addPostModal));

profileAvatarEl.addEventListener("click", () => openModal(editAvatarModal));

editModalForm.addEventListener("submit", handleProfileFormSubmit);
editAvatarModal.addEventListener("submit", handleAvatarFormSubmit);
addModalForm.addEventListener("submit", handleAddCardSubmit);

previewModal
  .querySelector(".modal__close-btn")
  .addEventListener("click", () => closeModal(previewModal));
editProfileModal
  .querySelector(".modal__close-btn")
  .addEventListener("click", () => closeModal(editProfileModal));
addPostModal
  .querySelector(".modal__close-btn")
  .addEventListener("click", () => closeModal(addPostModal));
editAvatarModal
  .querySelector(".modal__close-btn")
  .addEventListener("click", () => closeModal(editAvatarModal));
deletePostModal
  .querySelector(".modal__close-btn")
  .addEventListener("click", () => closeModal(deletePostModal));
editAvatarBtn.addEventListener("click", () => openModal(editAvatarModal));

deleteSubmit.addEventListener("click", handleDeleteSubmit);
deleteCancel.addEventListener("click", () => closeModal(deletePostModal));

// --------------------
// INIT
// --------------------
const init = () => {
  loadUserInfo();
  loadInitialCards();
  enableValidation(settings);
};

window.addEventListener("load", init);
