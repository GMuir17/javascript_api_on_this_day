const Events = require("./models/events.js");

document.addEventListener("DOMContentLoaded", () => {

  const events = new Events();
  events.getData();


});
