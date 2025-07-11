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

// Adding Interactivity Below:
// Open Modals
editProfileBtn.addEventListener("click", () =>
  editProfileModal.classList.add("modal_is-opened")
);
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
