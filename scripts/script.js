/* TO - DO : 
1. Add event listener to edit profile.
2. Add event listener to new post.
*/

// Edit Profile & Add Post buttons selected.
const editProfileBtn = document.querySelector(".profile__edit-btn");
const addPostBtn = document.querySelector(".profile__add-btn");

// Both Modals selected.
// NOTE: I gave ID's of "edit-profile-modal" and "new-post-modal" to each Modal respectively.
const editProfileModal = document.querySelector("#edit-profile-modal");
const addPostModal = document.querySelector("#new-post-modal");

// Exit Buttons selected on their respective Modals.
const exitProfileModal = editProfileModal.querySelector(".modal__close-btn");
const exitPostModal = addPostBtn.querySelector(".modal__close-btn");

// Adding Interactivity Below:
editProfileBtn.addEventListener("click", () =>
  console.log("Edit Profile Button has been pressed!")
);
addPostBtn.addEventListener("click", () =>
  console.log("Add Button has been pressed!")
);
