// 56. HTTP - Basic

const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.method);
    console.log('User hit the server');
    res.end('Home page');
});

server.listen(5000);
