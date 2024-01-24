// 62. Express Basics

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('User hit the Home page');
    res.status(200).send('Home page');
});

app.get('/about', (req, res) => {
    console.log('User hit the About page');
    res.status(200).send('About page');
});

app.all('*', (req, res) => {
    res.status(404).send(`<h1>Resource not found</h1>`);
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000');
});


// app.get
// app.post
// app.put
// app.delete
// app.all
// all.use
// all.listen
