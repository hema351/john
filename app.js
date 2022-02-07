const os=require('os')
const user=os.userInfo();
console.log(user);
console.log(`the time that the system has been running: ${os.uptime()} in seconds`);
const currentOS={
    name:os.type(),
   release :os.release(),
   freememory:os.freemem(),
   totalmemory:os.totalmem()

}
console.log(currentOS);