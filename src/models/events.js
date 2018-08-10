const PubSub = require("../helpers/pub_sub.js");
const Request = require("../helpers/request.js");

const Events = function () {
  this.data = null;
};

function timeStamp() {
  const now = new Date();
  const date = [now.getFullYear(), now.getMonth(), now.getDate()];
  return date.join("-");
};

Events.prototype.getData = function () {
  const date = timeStamp();
  console.log("date", date);

  const url = "https://history.muffinlabs.com/date";
  const request = new Request(url);

  request.get()
    .then((data) => {
      this.data = data.message;
      console.log(data.data["Events"]);
      PubSub.publish("Events:event-data-ready", this.data);
    })
    .catch((err) => {
      console.error(err);
    });
};


module.exports = Events;
