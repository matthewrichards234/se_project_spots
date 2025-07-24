// Looping Through an Array of Objects
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
];

// Edit Profile & Add Post buttons selected.
const editProfileBtn = document.querySelector(".profile__edit-btn");
const addPostBtn = document.querySelector(".profile__add-btn");

// Both Modals selected.
// NOTE: I gave ID's of "edit-profile-modal" and "new-post-modal" to each Modal respectively.
const editProfileModal = document.querySelector("#edit-profile-modal");
const addPostModal = document.querySelector("#new-post-modal");

// Exit Buttons selected on their respective Modals.
const exitProfileModal = editProfileModal.querySelector(".modal__close-btn");
const exitPostModal = addPostModal.querySelector(".modal__close-btn");

// Save Buttons selected on their respective Modals.
// Note: I did not use these for form submission... Maybe I can use them next stage?
const saveProfileBtn = editProfileBtn.querySelector(".modal__submit-btn");
const savePostBtn = addPostModal.querySelector(".modal__submit-btn");

// Added an ID element to h1 profile__name.
// Added an ID element to p profile__description.
const profileNameEl = document.querySelector("#profile-name");
const profileDescriptionEl = document.querySelector("#profile-description");
const inputName = document.querySelector("#profile-name-input");
const inputDescription = document.querySelector("#profile-description-input");
const inputCardLink = document.querySelector("#image-link-input");
const inputCardTitle = document.querySelector("#image-caption-input");

// Select Template.
const cardTemplate = document.querySelector("#template");
const cardList = document.querySelector(".cards__container");

// Get Card Element Function
const getCardElement = function (data) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardTitle = cardElement.querySelector(".card__title");
  const cardImg = cardElement.querySelector(".card__image");

  cardImg.src = data.link;
  cardImg.alt = data.name;
  cardTitle.textContent = data.name;

  return cardElement;
};

const openModal = function (modal) {
  modal.classList.add("modal_is-opened");
};

const closeModal = function (modal) {
  modal.classList.remove("modal_is-opened");
};

editProfileBtn.addEventListener("click", () => {
  openModal(editProfileModal);
  // Filling the form fields when opening the modal.
  inputName.value = profileNameEl.textContent;
  inputDescription.value = profileDescriptionEl.textContent.trim();
});

addPostBtn.addEventListener("click", () => openModal(addPostModal));

// Close Modals
exitProfileModal.addEventListener("click", () => closeModal(editProfileModal));

exitPostModal.addEventListener("click", () => closeModal(addPostModal));

initialCards.forEach(function (item) {
  const cardElement = getCardElement(item);
  cardList.prepend(cardElement);
});

function handleProfileFormSubmit(evt) {
  // Prevent default browser behavior.
  evt.preventDefault();
  // Get the values of each form field from the value property of the corresponding input element.
  // Insert these new values into the textContent property of the corresponding profile elements.
  profileNameEl.textContent = inputName.value;
  profileDescriptionEl.textContent = inputDescription.value;

  // Close the modal.
  closeModal(editProfileModal);
}
// Set the submit listener.
editProfileModal.addEventListener("submit", handleProfileFormSubmit);

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  const cardData = {
    link: inputCardLink.value,
    title: inputCardTitle.value,
  };
  const newCard = getCardElement(cardData);
  cardLi.prepend(newCard);
  closeModal("modal_is-opened");
  inputCardLink.value = "";
  inputCardTitle.value = "";
}

// Create the submit listener.
addPostModal.addEventListener("submit", handleAddCardSubmit);

// Note: Change all words "Post" to "Card" for readability later?
