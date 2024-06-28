const { readFile } = require("fs");

console.log("started first task");

// asynchronous operation!
readFile("../test-folder/first.txt", "utf8", (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
    console.log("completed first task");
});

console.log("starting next task");
