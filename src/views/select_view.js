const PubSub = require("../helpers/pub_sub.js");

const SelectView = function () {};

SelectView.prototype.bindEvents = function () {
  const form = document.querySelector("#form");
  // const dateInput = document.querySelector("#date");

  // dateInput.addEventListener("input", (evt) => {
  //   if (dateInput.validity.patternMismatch) {
  //       dateInput.setCustomValidity("Stick to the format mm/dd please");
  //   }
  // });

  form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const selectedDate = evt.target.date.value;
    PubSub.publish("SelectView:selected-date-ready", selectedDate);
  });

};

module.exports = SelectView;
