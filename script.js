"use strict";

const form = document.getElementById("form");
const userName = document.querySelector(".username");
const cardNumber = document.querySelector(".card-number");
const expMonth = document.querySelector(".exp-month");
const expYear = document.querySelector(".exp-year");
const cvcCode = document.querySelector(".cvc");
const ExpInputParent = document.querySelector(".exp-date");
// const small = document.getElementsByTagName("small");

// show error meessage
const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "card-holder exp-date cvc-code error";
  const small = formControl.querySelector("small");
  small.innerText = message;
};

// show success message
const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "card-holder exp-date cvc-code success";
};

//   card num valid
function ValidateCreditCardNumber() {
  const ccNum = cardNumber.value;
  const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
  const mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
  const amexpRegEx = /^(?:3[47][0-9]{13})$/;
  const discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
  const isValid = false;

  if (visaRegEx.test(ccNum)) {
    isValid = true;
  } else if (mastercardRegEx.test(ccNum)) {
    isValid = true;
  } else if (amexpRegEx.test(ccNum)) {
    isValid = true;
  } else if (discovRegEx.test(ccNum)) {
    isValid = true;
  }

  if (isValid) {
    showSuccess(cardNumber);
  } else {
    showError(cardNumber, "Please provide a valid card number!");
  }
}

// EventListener
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Card name
  if (userName.value === "" || userName.value.length <= 3) {
    showError(userName, "Input your card name");
  } else {
    showSuccess(userName);
  }

  // Card num validation
  ValidateCreditCardNumber();

  // Valid month and year
  if (
    expMonth.value < 1 ||
    expMonth.value > 31 ||
    expMonth == "" ||
    expMonth.value.length !== 2 ||
    expYear.value < 1 ||
    expYear.value > 12 ||
    expYear == "" ||
    expYear.value.length !== 2
  ) {
    showError(ExpInputParent, "Input valid expire card date");
  } else {
    showSuccess(expYear);
  }

  // Validation for cvc number
  if (cvcCode.value.length !== 3) {
    showError(cvcCode, "Insert correct cvc code");
  } else {
    showSuccess(cvcCode);
  }
});
