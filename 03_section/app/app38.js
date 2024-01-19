// 38. Async Patterns - Blocking Code

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Home Page'); 
        return;
    }; 
    if (req.url === '/about') {
        // Blocking Code !!!
        for (let i = 0; i < 100; i++) {
            for (let j = 0; j < 100; j++) {
                console.log(`${i} ${j}`);
            };
        };
        res.end('About Page'); 
        return;
    };
    res.end('Error Page');
});

server.listen(5000, () => {
    console.log('Server Listening on port 5000...');
});
