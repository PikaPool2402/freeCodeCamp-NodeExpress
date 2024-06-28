# Node Tutorial

https://github.com/john-smilga/node-express-course

https://www.course-api.com/

## npm - Node Package Manager

-   https://www.npmjs.com/

-   npm is automatically installed along with node.

-   npm enables us to do three things:

    -   re-use our own code in other projects.

    -   use code written by other developers.

    -   share our own code with other developers.

    -   install external packages easily.

-   a typical node project will have a lot of npm packages installed, as dependencies.

-   npm calls the shared/reusable code as a package, and package is a folder that contains JavaScript code.

#### Local Dependency - Use Only In Current Project

```sh
npm --version
npm i <packageName>
```

#### Global Dependency - Use Globally In Any Project

```sh
npm i -g <packageName>
```

## package.json

-   store important information about the project and the packages used.

-   how to create package.json?

    -   manual approach: create package.json in the root, and add the required properties.

    -   `npm init` (customized initialization)

    -   `npm init -y` (default initialization)

-   all of the dependencies are stored in "node_modules" folder.

-   the name and version of these dependencies are specified in "package.json" file.

-   if a particular package requires more packages, they are automatically installed by npm (eg: bootstrap).

#### why is package.json so important?

-   we dont need to send node_modules to github, as the size of the folder can become very large.

-   therefore, we want to push to github without the node_modules folders, for which we use .gitignore file.

-   after running `npm install`, npm will check the dependencies from package.json, and automatically install the specified packages.

## Nodemon

-   watches our files constantly, and restarts the app automatically when code is changed.

-   therefore, we dont need to write `node 01-intro.js` again and again to reflect the changes.

-   the command to spin up the development server is: `nodemon app.js`

## Dev Dependencies

-   dependencies which are only required during development, and not in the production build.

-   eg: testing packages, formatting packages, etc.

```sh
npm i nodemon -D
npm i nodemon --save-dev
```

-   We can setup commands in the "script" property of "package.json" object.

```js
"scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
}
```

## Uninstall Packages

```sh
npm uninstall <packageName>
```

## package-lock.json

-   contains versions for all of the packages used.

-   store versions of packages used by other packages implicitly to avoid bugs.

## Event Loop

-   https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick

-   https://www.youtube.com/watch?v=PNa9OMajw9w&pp=ygUaZXZlbnQgbG9vcCBtb3JuaW5nIGtleW5vdGU%3D

-   The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded — by **offloading** operations to the system kernel whenever possible. (eg: event-loop offloads the asynchronous read operation).

#### JavaScript is Synchronous & Single-Threaded (Slide-1)

-   JavaScript runs code line-by-line, in a synchronous fashion.

-   Therefore if a functionality takes a long time to run, our application is kind of blocked.

#### Solution - setTimeout (Slide-2)

-   setTimeOut is provided by the browser by default. (asynchronous)

-   setTimeOut is used to execute the function after the timer expires.

-   The solution is to "offload" the time-consuming task to the browser.

-   The "offloaded" tasks are processed by the browser in the background (non-blocking).

-   Once JavaScript is done executing the immediate code, only then it executes the callback.

#### Event Loop (Slide-3)

-   In the slide, we have 8 users, and all of them requesting something from the application.
-   Let us say, Larry has a request which executes a function that takes a long time to complete.
-   Therefore, this operation becomes blocking, and the user requests are blocked and cannot be served.

-   This is where the event loop comes into play.
-   The event loop identifies these time-consuming asynchronous tasks, and registers a callback function for them.
-   Therefore, these time-consuming tasks are "offloaded" and the rest of the user requests can be processed (non-blocking).
-   When the time-consuming operation is completed, the callback function is executed after all the immmediate code has been executed to serve Larry's request.

-   **Therefore, whenever node encounters an asynchronous operation, it offloads it and instead executes the immediately availaible code. When the immediate code has been executed, the callback function is invoked to executed the previously offloaded function!**

## Async Patterns

### Blocking Code

-   The code for the "/about" url takes a long time to execute.

-   Therefore if user-1 requests the about page, it will take a lot of time to serve the response.

-   And as a result, the other user requests will be blocked, till user-1 request is not served with a response.

-   user-1 requests about page -> callback function starts execution (takes a long time) -> user-2, user-3 requests some other page but the callback function has not finished previous execution -> therefore user-2, user-3 requests are blocked till user-1 is served.

#### Code

```js
const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Home Page");
    }
    if (req.url === "/about") {
        // BLOCKING CODE !!!
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(`${i} ${j}`);
            }
        }
        res.end("About Page");
    }
    res.end("Error Page");
});

server.listen(5000, () => {
    console.log("Server listening on port : 5000....");
});
```

-   Therefore, we should always avoid writing blocking code, and setting up asynchronous functionalities, that can be "offloaded" and invoked when ready!

### Asynchronous Read (Cleaner Approach)

-   setup promises along with async-await, instead of implementing a callback hell.

#### Code

```js
const { readFile } = require("fs");

readFile("./test-folder/first.txt", "utf8", (err, data) => {
    if (err) {
        return;
    } else {
        console.log(data);
    }
});
```

#### Return Promise

```js
const { readFile } = require("fs");

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, "utf8", (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

getText("./test-folder/first.txt")
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
```

#### Async Await

```js
const { readFile } = require("fs");

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, "utf8", (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

const start = async () => {
    const first = await getText("./test-folder/first.txt");
    // await waits until promise gets resolved!
    console.log(first);
};
start();
```

```js
const start = async () => {
    try {
        const first = await getText("./test-folder/first.txt");
        // wait for first file
        const second = await getText("./test-folder/second.txt");
        // wait for second file
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
};
start();
```

#### Refactor Code

```js
const { readFile, writeFile } = require("fs");

const util = require("util");
// used to directly return a promise!
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
    try {
        const first = await readFilePromise("./test-folder/first.txt", "utf8");
        const second = await readFilePromise(
            "./test-folder/second.txt",
            "utf8"
        );
        await writeFilePromise(
            "./test-folder/result-mind-grenade.txt",
            `THIS IS AWESOME : ${first} ${second}`
        );
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
};
start();
```
