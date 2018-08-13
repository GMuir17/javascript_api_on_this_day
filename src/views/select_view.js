const PubSub = require("../helpers/pub_sub.js");

const SelectView = function () {};

SelectView.prototype.bindEvents = function () {
  const form = document.querySelector("#form");
  form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const selectedDate = evt.target.date.value;
    PubSub.publish("SelectView:selected-date-ready", selectedDate);
  });

  const deathSelect = document.querySelector("#deaths-select");
  deathSelect.addEventListener("click", (evt) => {
    PubSub.publish("SelectView:deaths-selected", evt.detail);
  });
};

module.exports = SelectView;
