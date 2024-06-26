// interact with file-paths easily!
const path = require("path");

// return platform-specific path seperator!
console.log(path.sep);

// join path-segments using above seperator!
// returns normalized path, autocorrect slashes!
const filePath = path.join(
    "/test-folder/////",
    "test-subfolder",
    "test-file.txt"
);
console.log(filePath);

// return the last-portion of the path!
const base = path.basename(filePath);
console.log(base);

// return an absolute path!
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
