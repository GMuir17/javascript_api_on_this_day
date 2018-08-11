const EventView = function (container, event) {
  this.container = container;
  this.event = event;
};

EventView.prototype.render = function () {
  const eventContainer = document.createElement("div");
  this.container.appendChild(eventContainer);

  const eventYear = document.createElement("h4");
  eventYear.textContent = this.event["year"];
  eventContainer.appendChild(eventYear);

  const eventText = document.createElement("p");
  eventText.textContent = this.event["text"];
  eventContainer.appendChild(eventText);
};


module.exports = EventView;
