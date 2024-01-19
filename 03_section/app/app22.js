// 22. Sync vs Async

// const { readFileSync, writeFileSync } = require('fs');
// console.log('Start');

// const first = readFileSync('./content/first.txt', 'utf8');
// const second = readFileSync('./content/second.txt', 'utf8');
// console.log('first: ', first);
// console.log('second: ', second);

// writeFileSync(
//     './content/result-sync.txt', 
//     `Here is the result : ${first}, ${second}`,
//     { flag: 'a' }
// );

// console.log('Done with this task');
// console.log('Starting the next one');



const { readFile, writeFile } = require('fs');
console.log('Start');

readFile('./content/first.txt', 'utf8', (error, result) => {
    if (error) {
        console.error(error);
        return;
    };
    console.log(result);
    const first = result;
    
    readFile('./content/second.txt', 'utf8', (error, result) => {
        if (error) {
            console.error(error);
            return;
        };
        console.log(result);
        const second = result;

        writeFile(
            './content/result-async.txt', 
            `Here is the result : ${first}, ${second}`, 
            (error, result) => {
                if(error) {
                    console.error(error);
                    return;
                };
                console.log(result);
                console.log('Done with this task');
            }
        );
    });
});

console.log('Starting the next task');