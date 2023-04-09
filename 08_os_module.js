const os = require('os');

//info about current user
const User = os.userInfo();
console.log(User);

//method returns the system uptime in seconds

console.log(`the system uptime is ${os.uptime()/100/60}`);

const currentOs = {
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem(),
    usedmemory:os.totalmem-os.freemem
}

console.log(currentOs);