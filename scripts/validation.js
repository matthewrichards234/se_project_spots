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

const hideInputError = (errorMessage, input, settings) => {
  errorMessage.classList.remove(settings.errorClass);
  input.classList.remove(settings.inputErrorClass);
  errorMessage.textContent = "";
};

const showInputError = (errorMessage, input, settings) => {
  errorMessage.classList.add(settings.errorClass);
  input.classList.add(settings.inputErrorClass);
  errorMessage.textContent = input.validationMessage;
};

// Removes the error messages from all inputs.
// Function is called when the Profile Modal is opened so it does not show error messages.
const resetValidation = (formEl, settings) => {
  const inputList = Array.from(formEl.querySelectorAll(settings.inputSelector));
  inputList.forEach((input) => {
    const errorEl = formEl.querySelector(`#${input.id}-error`);
    if (errorEl) {
      errorEl.textContent = "";
      hideInputError(errorEl, input, settings);
    }
  });
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
    showInputError(errorMessage, input, settings);
  } else {
    hideInputError(errorMessage, input, settings);
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
