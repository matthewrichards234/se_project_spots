const initialCards = [
  {
    name: "Object 1",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Object 2",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "Object 3",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "Object 4",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Object 5",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Object 6",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Golden Gate Bridge",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
  },
];

// Open Edit & Add Modal Buttons
const editProfileBtn = document.querySelector(".profile__edit-btn");
const addPostBtn = document.querySelector(".profile__add-btn");

// Edit & Add Modals
const editProfileModal = document.querySelector("#edit-profile-modal");
const addPostModal = document.querySelector("#new-post-modal");

// Exit Edit & Add Modal Buttons
const exitProfileModal = editProfileModal.querySelector(".modal__close-btn");
const exitPostModal = addPostModal.querySelector(".modal__close-btn");

// Edit & Add Modal Forms
const editModalForm = editProfileModal.querySelector(".modal__form");
const addModalForm = addPostModal.querySelector(".modal__form");

// Preview Modals
const modalProview = document.querySelector("#preview-modal");
const exitModalPreiew = modalProview.querySelector(".modal__close-btn");
const previewImageEl = modalProview.querySelector(".modal__image");
const previewCaptionEl = modalProview.querySelector(".modal__caption");

// Submit Modal Buttons
const saveProfileBtn = editProfileBtn.querySelector(".modal__submit-btn");
const savePostBtn = addPostModal.querySelector(".modal__submit-btn");

// Modal Elements
const profileNameEl = document.querySelector("#profile-name");
const profileDescriptionEl = document.querySelector("#profile-description");
const inputName = document.querySelector("#profile-name-input");
const inputDescription = document.querySelector("#profile-description-input");
const inputCardLink = document.querySelector("#image-link-input");
const inputCardTitle = document.querySelector("#image-caption-input");

// Card Selectors
const cardTemplate = document.querySelector("#template");
const cardList = document.querySelector(".cards__list");

const getCardElement = function (data) {
  // Clone card template to create new cards.
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);
  const cardTitle = cardElement.querySelector(".card__title");
  const cardImg = cardElement.querySelector(".card__image");

  cardImg.src = data.link;
  cardImg.alt = data.name;
  cardTitle.textContent = data.name;

  // Like functionality
  const cardLikeBtn = cardElement.querySelector(".card__like-btn");
  cardLikeBtn.addEventListener("click", function () {
    toggleLikeBtn(cardLikeBtn);
  });

  // Delete functionality
  const cardDeleteBtn = cardElement.querySelector(".card__delete-btn");
  cardDeleteBtn.addEventListener("click", function () {
    cardElement.remove();
  });

  // Open card preview modal
  cardImg.addEventListener("click", function () {
    previewCaptionEl.textContent = data.name;
    previewImageEl.src = data.link;
    previewImageEl.alt = data.name;
    openModal(modalPreview);
  });

  return cardElement;
};

const toggleLikeBtn = function (btn) {
  btn.classList.toggle("card__like-btn_clicked");
};

const openModal = function (modal) {
  modal.classList.add("modal_is-opened");
};

editProfileBtn.addEventListener("click", () => {
  openModal(editProfileModal);
  // Filling the form fields when opening the modal.
  inputName.value = profileNameEl.textContent;
  inputDescription.value = profileDescriptionEl.textContent.trim();
});

addPostBtn.addEventListener("click", () => openModal(addPostModal));

exitProfileModal.addEventListener("click", () => closeModal(editProfileModal));

exitPostModal.addEventListener("click", () => closeModal(addPostModal));

exitModalPreiew.addEventListener("click", () => closeModal(modalProview));

initialCards.forEach(function (item) {
  const cardElement = getCardElement(item);
  cardList.prepend(cardElement);
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  // Get the values of each form field from the value property of the corresponding input element.
  // Insert these new values into the textContent property of the corresponding profile elements.
  profileNameEl.textContent = inputName.value;
  profileDescriptionEl.textContent = inputDescription.value;

  closeModal(editProfileModal);
}
editModalForm.addEventListener("submit", handleProfileFormSubmit);

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  const cardData = {
    link: inputCardLink.value,
    name: inputCardTitle.value,
  };
  const newCard = getCardElement(cardData);
  cardList.prepend(newCard);
  closeModal(addPostModal);
  addModalForm.reset();
}

addModalForm.addEventListener("submit", handleAddCardSubmit);

// Code a feature that allows the users to close the modal by clicking on the overlay,
// i.e. anywhere outside the modal’s borders:
const closeModalViaEvent = (modal) => {
  // 1. Get the modal that is open... if modal is open:
  // 2. add an event listener on click and on keypress esc.
  // 3. How do i determine what constitutes "outside" of a modal? It cannot be static I know that much.
  // if click not on modal__container, close modal.
  const modalContainer = document.querySelector(".modal__container");
  if (modal.classList.contains("modal_is-opened")) {
    modalContainer.addEventListener("click", (event) => {
      if (event.target !== modalContainer) {
        closeModal(modal);
      }
    });
  }
};

const closeModal = function (modal) {
  modal.classList.remove("modal_is-opened");
};

addPostModal.addEventListener("keydown", (evt) => {
  if (
    evt.key === "Escape" &&
    addPostModal.classList.contains("modal_is-opened")
  ) {
    closeModal(addPostModal);
  }
});

addPostModal.addEventListener("mousedown", (evt) => {
  if (!modalContainer.contains(evt.target)) {
    closeModal(addPostModal);
  }
});
