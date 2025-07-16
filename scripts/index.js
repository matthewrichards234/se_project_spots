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

// Filling the form fields when opening the modal.
// Added an ID element to h1 profile__name.
// Added an ID element to p profile__description.
const profileNameEl = document.querySelector("#profile-name");
const profileDescriptionEl = document.querySelector("#profile-description");
const inputName = document.querySelector("#profile-name-input");
const inputDescription = document.querySelector("#profile-description-input");

// Adding Interactivity Below:
// Open Modals
editProfileBtn.addEventListener("click", () => {
  editProfileModal.classList.add("modal_is-opened");
  inputName.value = profileNameEl.textContent;
  inputDescription.value = profileDescriptionEl.textContent.trim();
});

addPostBtn.addEventListener("click", () =>
  addPostModal.classList.add("modal_is-opened")
);

// Close Modals
exitProfileModal.addEventListener("click", () =>
  editProfileModal.classList.remove("modal_is-opened")
);

exitPostModal.addEventListener("click", () =>
  addPostModal.classList.remove("modal_is-opened")
);

initialCards.forEach(function (item) {
  console.log(item.name);
});
