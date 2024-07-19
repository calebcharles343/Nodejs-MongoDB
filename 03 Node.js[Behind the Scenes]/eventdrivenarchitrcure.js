let events = require("events");

// Creating an event emitter
let eventEmitter = new events.EventEmitter();

// this is the event listenner
eventEmitter.on("connection", () => {
  console.log("connectin=on seuccessfull.");
});

// firing the connection event
eventEmitter.emit("connection");
