const EventView = function (container, event) {
  this.container = container;
  this.event = event;
};

EventView.prototype.render = function () {
  const eventContainer = document.createElement("div");
  this.container.appendChild(eventContainer);

  const eventList = this.createList();
  eventContainer.appendChild(eventList);
};

EventView.prototype.createList = function () {
  const eventInfoList = document.createElement("ul");
  this.populateList(eventInfoList);
  return eventInfoList;
};

EventView.prototype.populateList = function (list) {
  const eventYear = document.createElement("li");
  const eventText = document.createElement("li");

  eventYear.textContent = this.event["year"];
  eventText.textContent = this.event["text"];

  list.appendChild(eventYear);
  list.appendChild(eventText);
};

module.exports = EventView;
