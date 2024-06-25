// no dom, cannot use methods like textContent()
// howerver, we have access to methods like setInterval, and setTimeOut!

// Global Variables!
// __filename - returns the current file name
// __dirname  - returns path to current directory
// require    - returns a function for using modules
// module     - returns info about the current module (file)
// process    - return info about the env where the program is being executed

console.log(module);

setInterval(() => {
    console.log("hello world");
}, 1000);
