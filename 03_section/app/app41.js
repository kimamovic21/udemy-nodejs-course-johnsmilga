// 41. Async Patterns - Node's Native Option

const { readFile, writeFile } = require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
    try {
        const first = await readFilePromise('./content/first.txt', 'utf8');
        const second = await readFilePromise('./content/second.txt', 'utf8');
        console.log('First: ', first);
        console.log('Second: ', second);

        await writeFilePromise(
            './content/result-mind-grenade.txt', 
            `This is Awesome : ${first}, ${second}`,
            { flag: 'a' }
        );
    }
    catch (error) {
        console.log(error);
    };
};
start();
