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
};


module.exports = Events;
