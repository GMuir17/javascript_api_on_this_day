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

  const birthSelect = document.querySelector("#births-select");
  birthSelect.addEventListener("click", (evt) => {
    PubSub.publish("SelectView:births-selected", evt.detail)
  });

  const eventsSelect = document.querySelector("#events-select");
  eventsSelect.addEventListener("click", (evt) => {
    PubSub.publish("SelectView:events-selected", evt.detail)
  });
};

module.exports = SelectView;
