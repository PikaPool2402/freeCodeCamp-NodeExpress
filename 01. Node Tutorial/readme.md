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
