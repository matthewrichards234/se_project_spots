const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit-btn",
  inactiveButtonClass: "modal__submit-btn_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const enableValidation = (settings) => {
  formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach((formEl) => {
    formEl.addEventListener("input", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formEl, settings);
  });
};

const setEventListeners = (form, settings) => {
  const inputs = form.querySelectorAll(settings.inputSelector);
  const button = form.querySelector(settings.submitButtonSelector);
  inputs.forEach((inputEl) => {
    inputEl.addEventListener("input", function () {
      checkValidity(inputEl);
      toggleButtonState(inputs, button);
    });
  });
};

const checkValidity = (input) => {
  const errorMessage = document.querySelector(`#${input.id}-error`);
  if (!input.validity.valid) {
    errorMessage.classList.add(settings.errorClass);
    errorMessage.textContent = input.validationMessage;
  } else {
    errorMessage.classList.remove(settings.errorClass);
    errorMessage.textContent = "";
  }
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(settings.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(settings.inactiveButtonClass);
  }
};

const hasInvalidInput = (inputList) => {
  return [...inputList].some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

enableValidation(settings);
