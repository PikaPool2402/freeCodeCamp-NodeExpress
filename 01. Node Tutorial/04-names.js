const peter = "peter";
const john = "john";

console.log(module);
// module is global var!
// contains an export property!

module.exports = { peter, john };
// module.exports = { peter: peter, john: john };
// set the value of the export property as an object!
