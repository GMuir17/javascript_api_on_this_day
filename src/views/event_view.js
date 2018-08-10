const EventView = function (container, event) {
  this.container = container;
  this.event = event;
};

EventView.prototype.render = function () {
  console.log("Banana");
};

module.exports = EventView;
