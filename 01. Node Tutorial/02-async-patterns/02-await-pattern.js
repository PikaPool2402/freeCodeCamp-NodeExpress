const { readFile, writeFile } = require("fs").promises;
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
    try {
        const first = await readFile("./test-folder/first.txt", "utf8");
        const second = await readFile("./test-folder/second.txt", "utf8");
        await writeFile(
            "./test-folder/result-mind-grenade.txt",
            `THIS IS AWESOME : ${first} ${second}`
        );
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
};
start();
