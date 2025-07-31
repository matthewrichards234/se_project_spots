const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit-btn",
  inactiveButtonClass: "modal__submit-btn_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const enableValidation = (settings) => {
  // 1. Get an array of forms.
  formList = Array.from(document.querySelectorAll(settings.formSelector));
  // 2. Iterate over array.
  // For Each form set validation & Prevent default behavior.
  formList.forEach((form) => {
    form.addEventListener("input", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(form, settings);
  });
};

const setEventListeners = (form, settings) => {
  // 1. Get the form inputs. => form.querySelectorAll(".inputs")
  inputs = document.querySelectorAll(settings.inputSelector);
  // 2. Iterate over inputs.
  inputs.forEach((input) => {
    input.addEventListener("input", checkValidity(input));
  });
  // 3. add event listener input on every user input.
  // 4. check if input is valid. => checkValidity()
};

const checkValidity = (input) => {
  // error message comes from input.
  // 0. get span tag for error message.
  const errorMessage = document.querySelectorAll(".modal__error"); //selectorALL?
  // 1. Check if input.validity.valid is false.
  // a. add error message visible modifier.
  // b. give the span tag the error message content.
  // 2. Else validity is true.
  // a. remove visible modifer from error message.
  // b. remove text content from error message
  if (!input.validity.valid) {
    errorMessage.classList.add("modal__error_visible");
    errorMessage.textContent = input.validationMessage;
  } else {
    errorMessage.classList.remove("modal__error_visible");
    errorMessage.textContent = "";
  }
};

enableValidation(settings);
