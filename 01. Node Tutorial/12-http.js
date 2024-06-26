// allows us to setup a web-server!
const http = require("http");

// 2 paramters - both are objects!
// req - incoming request (eg: client requesting webpage)
// res - what we are sending back, to the requesting client
const server = http.createServer((req, res) => {
    console.log(req); // customize response, according to endpoint (url)!

    if (req.url === "/") {
        res.end("welcome to home-page!"); // short-cut
    } else if (req.url === "/about") {
        res.end("welcome to about-page!"); // short-cut
    } else {
        // DEFAULT RESPONSE
        res.write(`<h1>hello world</h1>`);
        res.end(); // response sent, end the request!
    }
});

// specify port our server is listening/hosted on!
server.listen(5000); // http://localhost:5000/

// We have created a web-server, and web-servers keep on listening for requests. Therefore, the code does not exit from the execution and keeps on listening for requests. We want our server to always be up in our application!

// Above server is running on port 5000, which actively kee[s listening for requests and sends back the appropriate response!
