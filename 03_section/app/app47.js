// 47. Streams - Read File

// const { writeFileSync } = require('fs');

// for (let i = 0; i < 100; i++) {
//     writeFileSync('./content/big.txt', `Hello World ${i}\n`, { flag: 'a' });
// };

const { createReadStream } = require('fs');

const stream = createReadStream('./content/big.txt');

stream.on('data', (result) => {
    console.log(result);
});
