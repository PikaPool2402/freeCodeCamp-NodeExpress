const { readFile, writeFile } = require("fs");

// need to pass multiple read/write inside the callback function, to use the results from the previous read!
readFile("./test-folder/first.txt", "utf-8", (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    // console.log(result);

    // CALLBACK HELL !!!
    readFile("./test-folder/second.txt", "utf-8", (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        // console.log(result);

        writeFile(
            "./test-folder/result-async.txt",
            `Here is the result : ${first} ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(result);
                // undefined - not expecting anything back!
            }
        );
    });
});
