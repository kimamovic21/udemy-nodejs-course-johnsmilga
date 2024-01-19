// 39. Async Patterns - Setup Promises

const { readFile } = require('fs');

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            };
        });
    });
};

getText('./content/first.txt')
    .then((result) => console.log(result))
    .catch((error) => console.error(`Error: ${error}`));
