// create an item property, with the value of the array, inside the exports object!
module.exports.items = ["item1", "item2"];

// similar example!
const person = {
    name: "bob",
};
module.exports.singlePerson = person;

console.log(module);
