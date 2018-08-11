const Events = require("./models/events.js");
const EventListView = require("./views/event_list_view.js");
const SelectView = require("./views/select_view.js");

document.addEventListener("DOMContentLoaded", () => {

  const eventListContainer = document.querySelector("#event-container");
  const eventListView = new EventListView(eventListContainer);
  eventListView.bindEvents();

  const selectView = new SelectView();
  selectView.bindEvents();

  const events = new Events();
  events.getTodaysData();


});
