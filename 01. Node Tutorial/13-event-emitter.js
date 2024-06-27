// https://www.npmjs.com/
// npm is automatically installed with node
// npm allows us to re-use our own code in other projects, use code written by other developers, share our own code with other developers, and install external packages easily!
// typical node project will have more than few npm packages installed, as dependencies!
// npm calls the shared/reusable code as a package, and package is a folder that contains JS code!

// npm --version
// local dependency - use only in this project
// npm i <packageName>
// local dependency - use in any project
// npm i -g <packageName>

// package.json - store important information about project and packages used!

// manual approach (create package.json in the root, and create the properties)
// npm init (custom initialization)
// npm init -y (default initialization)

// all dependencies stores in node_modules
// dependencies are specified in package.json file
// if some package, requires more packages, they are automatically installed (eg: bootstrap)
// must install external packages before you start using them

// why is package.json so important?
// dont need to send node_modules to github, only send the code
// push to github without node_modules, using .gitignore file
// run npm install, npm will check dependencies from package.json, and automatically install the specified packages
