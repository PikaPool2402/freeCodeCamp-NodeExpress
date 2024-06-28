const http = require("http");

// everytime a request comes in, we execute below callback!
const server = http.createServer((req, res) => {
    // this cb is not executed immediately!
    console.log("request event");
    res.end("hello world");
});

server.listen(5000, () => {
    console.log("server listening on port : 5000...");
});
// listen - asynchronous function!
// stays alive, constantly listening for requests (request-events!
// event loop waits for requests to come in, and then executes the cb!
