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
  inputs.forEach((inputEl) => {
    inputEl.addEventListener("input", () => checkValidity(inputEl));
  });
};

const checkValidity = (input) => {
  const errorMessage = document.querySelector(`#${input.id}-error`);
  if (!input.validity.valid) {
    errorMessage.classList.add("modal__error_visible");
    errorMessage.textContent = input.validationMessage;
  } else {
    errorMessage.classList.remove("modal__error_visible");
    errorMessage.textContent = "";
  }
};

enableValidation(settings);
