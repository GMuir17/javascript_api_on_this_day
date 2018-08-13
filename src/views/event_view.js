const EventView = function (container, event) {
  this.container = container;
  this.event = event;
};

EventView.prototype.render = function () {
  const eventContainer = document.createElement("div");
  eventContainer.classList.add("event");
  this.container.appendChild(eventContainer);

  const eventYear = document.createElement("h4");
  eventYear.textContent = this.event["year"];
  eventContainer.appendChild(eventYear);

  const eventText = document.createElement("p");
  eventText.textContent = this.event["text"];
  eventContainer.appendChild(eventText);

  const eventBreak = document.createElement("br");
  eventContainer.appendChild(eventBreak);
};


module.exports = EventView;
