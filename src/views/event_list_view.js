const PubSub = require("../helpers/pub_sub.js");
const EventView = require("./event_view.js");

const EventListView = function (container) {
  this.container = container;
};

EventListView.prototype.bindEvents = function () {
  PubSub.subscribe("Events:event-data-ready", (evt) => {
    const events = evt.detail;
    this.render(events);
  });
};

EventListView.prototype.render = function (events) {
  this.container.innerHTML = "";
  events.forEach((event) => {
    const eventView = new EventView(this.container, event);
    eventView.render();
  });
};

module.exports = EventListView;
