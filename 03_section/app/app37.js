// 37. Event Loop - Code Examples

// const { readFile } = require('fs');

// console.log('Started a first task');

// readFile('./content/first.txt', 'utf8', (error, result) => {
//     if(error){
//         console.log(error);        
//         return;
//     };
//     console.log(result);
//     console.log('Completed first task');
// });
// console.log('Starting next task');



// console.log('First');
// setTimeout(() => {
//     console.log('Second');
// }, 0);
// console.log('Third');



// setInterval(() => {
//     console.log('Hello World!');
// }, 2000);
// console.log('I will run first');



const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Request event');
    res.end('Hello World');
});

server.listen(5000, () => {
    console.log('Server listening on port : 5000...');
});
