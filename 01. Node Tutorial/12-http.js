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

// On the software side, a web server includes several parts that control how web users access hosted files. At a minimum, this is an HTTP server. An HTTP server is software that understands URLs (web addresses) and HTTP (the protocol your browser uses to view webpages). An HTTP server can be accessed through the domain names of the websites it stores, and it delivers the content of these hosted websites to the end user's device.
// At the most basic level, whenever a browser needs a file that is hosted on a web server, the browser requests the file via HTTP. When the request reaches the correct (hardware) web server, the (software) HTTP server accepts the request, finds the requested document, and sends it back to the browser, also through HTTP. (If the server doesn't find the requested document, it returns a 404 response instead.)

// To publish a website, you need either a static or a dynamic web server.

// A static web server, or stack, consists of a computer (hardware) with an HTTP server (software). We call it "static" because the server sends its hosted files as-is to your browser.

// A dynamic web server consists of a static web server plus extra software, most commonly an application server and a database. We call it "dynamic" because the application server updates the hosted files before sending content to your browser via the HTTP server.
