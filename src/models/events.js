const PubSub = require("../helpers/pub_sub.js");
const Request = require("../helpers/request.js");

const Events = function () {
  this.data = null;
  this.deaths = null;
  this.births = null;
};

// function timeStamp() {
//   const now = new Date();
//   const date = [now.getMonth() + 1, now.getDate()];
//   return date.join("/");
// };

Events.prototype.bindEvents = function () {
  this.getTodaysData();
  this.getSelectedDaysData();
  this.getDeathsData();
  this.getBirthsData();
  this.getEventsData();
};

Events.prototype.getTodaysData = function () {
  // const date = timeStamp();

  const url = "https://history.muffinlabs.com/date";
  const request = new Request(url);

  request.get()
    .then((data) => {
      this.data = data.data["Events"];
      this.deaths = data.data["Deaths"];
      this.births = data.data["Births"];
      PubSub.publish("Events:event-data-ready", this.data);
    })
    .catch((err) => {
      console.error(err);
    });
};

Events.prototype.getSelectedDaysData = function () {
  PubSub.subscribe("SelectView:selected-date-ready", (evt) => {
    const rawDate = evt.detail;
    const formattedDate = formatUserDate(rawDate);

    const url = `https://history.muffinlabs.com/date/${formattedDate}`;
    const request = new Request(url);

    request.get()
      .then((data) => {
        this.data = data.data["Events"];
        PubSub.publish("Events:selected-day-data-ready", this.data);
      })
      .catch((err) => {
        console.error(err);
      });
  });
};

Events.prototype.getDeathsData = function () {
  PubSub.subscribe("SelectView:deaths-selected", (evt) => {
    PubSub.publish("Events:deaths-data-ready", this.deaths);
  });
};

Events.prototype.getBirthsData = function () {
  PubSub.subscribe("SelectView:births-selected", (evt) => {
    PubSub.publish("Events:births-data-ready", this.births);
  });
};

Events.prototype.getEventsData = function () {
  PubSub.subscribe("SelectView:events-selected", (evt) => {
    PubSub.publish("Events:event-data-ready", this.data);
  });
};

function formatUserDate(date) {
  const dateArray = date.split("/");
  const formattedDate = dateArray[1] + "/" + dateArray[0];
  return formattedDate;
};


module.exports = Events;
