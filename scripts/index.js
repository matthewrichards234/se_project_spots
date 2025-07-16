// Looping Through an Array of Objects

/* To - Do :
1. Get 6 images.
2. Compress them.
3. Add them to images folder.
4. Link them via relative path */
const initialCards = [
  {
    name: "Object 1",
    link: "../images\tsuyoshi-kozu-9luf51j0R-0-unsplash-min  (1).jpg",
  },
  {
    name: "Object 2",
    link: "../images\tsuyoshi-kozu-9luf51j0R-0-unsplash-min  (2).jpg",
  },
  {
    name: "Object 3",
    link: "../images\tsuyoshi-kozu-9luf51j0R-0-unsplash-min  (3).jpg",
  },
  {
    name: "Object 4",
    link: "../images\tsuyoshi-kozu-9luf51j0R-0-unsplash-min  (4).jpg",
  },
  {
    name: "Object 5",
    link: "../images\tsuyoshi-kozu-9luf51j0R-0-unsplash-min  (5).jpg",
  },
  {
    name: "Object 6",
    link: "../images\tsuyoshi-kozu-9luf51j0R-0-unsplash-min  (6).jpg",
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

initialCards.forEach(function (item) {
  console.log(item.name);
});
