const myModule = require("./my_module");
const {EventEmitter} = require("events");
console.log(myModule);

// Create a new instance from a class
const eventEmitter = new EventEmitter();

eventEmitter.on('lunch', () => {
    console.log('yum')
})
// calling the function
eventEmitter.emit('lunch');
console.log("hello world");

global.luckyNum = '23';

console.log(global.luckyNum);
console.log(process.platform)
console.log(process.env.USER);
// Call something when function ends
process.on('exit', function() {
    // do something!
})

const { readFile } = require('fs').promises;
async function hello() {
    const file = await readFile('./hello.txt', 'utf8');
}