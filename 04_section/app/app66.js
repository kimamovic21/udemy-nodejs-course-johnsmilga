// 66. JSON - Basics

const express = require('express');
const app = express();
const { products } = require('./data.js');

app.get('/', (req, res) => {
    // res.json([{ name: 'John' }, { name: 'Kerim' }]);
    res.json(products);
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000');
});
