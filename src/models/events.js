const PubSub = require("../helpers/pub_sub.js");
const Request = require("../helpers/request.js");

const Events = function () {
  this.data = null;
};

function timeStamp() {
  const now = new Date();
  const date = [now.getMonth() + 1, now.getDate()];
  return date.join("/");
};

Events.prototype.bindEvents = function () {
  this.getTodaysData();
  this.getSelectedDaysData();
};

Events.prototype.getTodaysData = function () {
  // const date = timeStamp();

  const url = "https://history.muffinlabs.com/date";
  const request = new Request(url);

  request.get()
    .then((data) => {
      this.data = data.data["Events"];
      PubSub.publish("Events:event-data-ready", this.data);
    })
    .catch((err) => {
      console.error(err);
    });
};

Events.prototype.getSelectedDaysData = function () {
  PubSub.subscribe("SelectView:selected-date-ready", (evt) => {
    const rawDate = evt.detail;
    console.log("Raw", rawDate);
    const formattedDate = formatUserDate(rawDate);
    console.log("Formatted", formattedDate);
  });
};

function formatUserDate(date) {
  const dateArray = date.split("/");
  const formattedDate = dateArray[1] + "/" + dateArray[0];
  return formattedDate;
};


module.exports = Events;
