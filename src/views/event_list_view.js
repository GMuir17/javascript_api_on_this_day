const PubSub = require("../helpers/pub_sub.js");

const EventListView = function (container) {
  this.container = container;
};

EventListView.prototype.bindEvents = function () {
  PubSub.subscribe("Events:event-data-ready", (evt) => {
    const events = evt.detail;
    console.log(events);
  });
};





module.exports = EventListView;
