const PubSub = require("../helpers/pub_sub.js");

const SelectView = function () {};

SelectView.prototype.bindEvents = function () {
  const form = document.querySelector("#form");
  form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const selectedDate = evt.target.date.value;
    console.log("selected date", selectedDate);
    PubSub.publish("SelectView:selected-date-ready", selectedDate);
  });

};

module.exports = SelectView;
