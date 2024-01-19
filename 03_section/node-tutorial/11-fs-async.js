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
                    console.error(error)
                    return;
                };
                console.log(result);
            }
        );
    });
});