// const peter = "peter";
// const john = "john";

// const sayHi = (name) => {
//     console.log(`hello there ${name}`);
// };
// sayHi("susan");
// sayHi(peter);
// sayHi(john);

// We use CommonJS library inside node applications
// In CommonJS, every file in node is a module (by default)
// Modules - Encapsulated Code (only share minimum principle)

const names = require("./04-names");
const sayHi = require("./05-utils");

sayHi("susan");
sayHi(names.peter);
sayHi(names.john);
