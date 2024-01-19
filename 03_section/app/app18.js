// 18. OS - Module

const os = require('os');

// information about current user
const user = os.userInfo()
console.log(user);

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds.`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
};
console.log(currentOS);
