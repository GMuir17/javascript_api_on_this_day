const Events = require("./models/events.js");

document.addEventListener("DOMContentLoaded", () => {
  console.log("Hey");

  const events = new Events();
  events.getData();


});
