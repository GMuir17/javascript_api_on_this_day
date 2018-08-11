const PubSub = require("../helpers/pub_sub.js");

const SelectView = function () {};

SelectView.prototype.bindEvents = function () {
  const inputField = document.querySelector("#date");
  inputField.addEventListener("change", (evt) => {
    const selectedDate = evt.target.value;
    console.log(selectedDate);
  })
};







module.exports = SelectView;
