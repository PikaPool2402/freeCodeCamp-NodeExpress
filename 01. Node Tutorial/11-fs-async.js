const { readFile, writeFile } = require("fs");

console.log("starting new task");

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

                console.log("done with this task");
            }
        );
    });
});

console.log("starting next task");
// node off-loads the read/write tasks, and continues to process it in the background. The code moves forward to the next task and when the off-loaded operation is complete, node returns the result. Therefore the code is executed asynchronously (non-blocking).
