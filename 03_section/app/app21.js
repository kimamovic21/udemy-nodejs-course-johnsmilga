// 21. FS Module (async)

const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf8', (error, result) => {
    if (error) {
        console.error(error);
        return;
    }
    console.log(result);

    const first = result;
    
    readFile('./content/second.txt', 'utf8', (error, result) => {
        if (error) {
            console.error(error);
            return;
        }

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
