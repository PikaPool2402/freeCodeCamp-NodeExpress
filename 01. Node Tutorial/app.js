// this module returns a class!
const EventEmitter = require("events");

// create an instance/object of the class!
const customEmitter = new EventEmitter();

// 2 member functions:
// emit - emits an event
// on - listen for an event

// listen for 'response' event!
customEmitter.on("response", () => {
    console.log(`data received!`);
});
customEmitter.on("response", () => {
    console.log(`can have multiple functions!`);
});

// fire-off the 'response' event!
customEmitter.emit("response");

// order matters! first listen for the event, and then emit it!
// can also send arguments to the listener function, using the emitter function!

customEmitter.on("response", (str, id) => {
    console.log(`data received! ${str} ${id}`);
});

// fire-off the 'response' event!
customEmitter.emit("response", "hello", 31);
