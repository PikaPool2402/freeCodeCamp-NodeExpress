// os module provides methods for interacting with the os, and server!
// os var is an exports object that contains multiple properties!
const os = require("os");

// info about current os!
const name = os.type;
console.log(name());

// info about current user!
const user = os.userInfo();
console.log(user);

// method to return the system uptime in seconds!
console.log(`The System Uptime is ${os.uptime()} seconds`);

// more methods!
const currentOS = {
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    release: os.release(),
};
console.log(currentOS);
