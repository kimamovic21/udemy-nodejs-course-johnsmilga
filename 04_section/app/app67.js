// 67. Params, Query String - Setup

const express = require('express');
const app = express();
const { products } = require('./data.js');

app.get('/', (req, res) => {
    res.send(`
        <h1>Home page</h1>
        <a href='/api/products'>Products</a>
    `);
});

app.get('/api/products', (req, res) => {
    // res.json(products);
    const newProducts = products?.map((product) => {
        const { id, name, image } = product;
        return { id, name, image };
    });
    res.json(newProducts);
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000');
});
