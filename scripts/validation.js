const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit-btn",
  inactiveButtonClass: "modal__submit-btn_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const enableValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach((formEl) => {
    formEl.addEventListener("input", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formEl, settings);
  });
};

const hideInputError = (errorMessage, inputError) => {
  errorMessage.classList.remove(settings.errorClass);
  // form.classList.remove(settings.inputErrorClass);
  errorMessage.textContent = "";
};

const showInputError = (errorMessage, input) => {
  errorMessage.classList.add(settings.errorClass);
  // form.classList.add(settings.inputErrorClass);
  errorMessage.textContent = input.validationMessage;
};

// Removes the error messages from all inputs.
// Function is called when the Profile Modal is opened so it does not show error messages.
const resetValidation = (profileModal, formInputs) => {
  // 1. Check if modal is opened (assume modal is so in this function?)
  // Let's assume the profile modal is already opened when writing this function...
  // 2. forEach error message in form, reset its textContent.
  // We need to get all inputs as an array.
  formInputs.forEach((input) => {});
};

const setEventListeners = (form, settings) => {
  const inputs = form.querySelectorAll(settings.inputSelector);
  const button = form.querySelector(settings.submitButtonSelector);
  inputs.forEach((inputEl) => {
    inputEl.addEventListener("input", function () {
      checkValidity(inputEl, settings);
      toggleButtonState(inputs, button, settings);
    });
  });
};

const checkValidity = (input, settings) => {
  const errorMessage = document.querySelector(`#${input.id}-error`);
  if (!input.validity.valid) {
    showInputError(errorMessage, input);
  } else {
    hideInputError(errorMessage);
  }
};

const toggleButtonState = (inputList, buttonElement, settings) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(settings.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(settings.inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

const hasInvalidInput = (inputList) => {
  return [...inputList].some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

enableValidation(settings);
