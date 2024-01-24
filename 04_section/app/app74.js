// 74. Multiple Middleware Functions

const express = require('express');
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');

app.use([ logger, authorize ]);

app.get('/', (req, res) => {
    res.send('Home');
});

app.get('/about', (req, res) => {
    res.send('About');
});

app.get('/api/products', (req, res) => {
    res.send('Products');
});

app.get('/api/items', (req, res) => {
    console.log('User: ', req.user);
    res.send('Items');
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000');
});
