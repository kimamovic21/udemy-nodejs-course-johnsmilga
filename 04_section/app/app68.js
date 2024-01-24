// 68. Params

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
    const newProducts = products?.map((product) => {
        const { id, name, image } = product;
        return { id, name, image };
    });
    res.json(newProducts);
});

// app.get('/api/products/1', (req, res) => {
//     const singleProduct = products.find((product) => product.id === 1);
//     res.json(singleProduct);
// });

app.get('/api/products/:productID', (req, res) => {
    // console.log(req);
    // console.log(req.params);

    const { productID } = req.params;
    // console.log(productID);

    const singleProduct = products.find((product) => product.id === Number(productID));
    // console.log(singleProduct);

    if (!singleProduct) {
        return res.status(404).send('Product does not exist...');
    };

    return res.json(singleProduct);
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000');
});
