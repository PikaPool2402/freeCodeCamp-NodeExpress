// interact with file-systems (synchronously)!
const { readFileSync, writeFileSync } = require("fs");

// readFileSync(path, encoding);
const first = readFileSync("./test-folder/first.txt", "utf8");
const second = readFileSync("./test-folder/second.txt", "utf8");
console.log(first, second);

// writeFileSync(path, value-to-write);
// file is overwritten, or new file is created!
writeFileSync(
    "./test-folder/result-sync.txt",
    `Here is the result : ${first} ${second}`
);

// to append to the file!
// writeFileSync(
//     "./test-folder/result-sync.txt",
//     `Here is the result : ${first} ${second}`,
//     { flag: "a" }
// );
