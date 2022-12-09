"use strict";

const form = document.getElementById("form");
const userName = document.querySelector(".username");
const cardNumber = document.querySelector(".card-number");
const expMonth = document.querySelector(".exp-month");
const expYear = document.querySelector(".exp-year");
const cvcCode = document.querySelector(".cvc");

// show error meessage
const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "card-holder exp-details cvc-code error";
};

// EventListener
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (userName.value === "") {
    showError(userName, "Please input your details");
  }
});
