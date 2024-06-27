# Node Tutorial

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

#### Dev Dependencies

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

#### Uninstall Packages

```sh
npm uninstall <packageName>
```
