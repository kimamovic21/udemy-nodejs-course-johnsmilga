// 80. Install Postman

const express = require('express');
const app = express();
let { people } = require('./data');

app.use(express.static('./methods-public'));  // static assets
app.use(express.urlencoded({ extended: false }));  // parse form data
app.use(express.json());  // parse json

app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people });
});

app.post('/api/people', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: 'Please provide name value' });
    };
    res.status(201).json({ success: true, person: name });
});

app.post('/api/postman/people', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: 'Please provide name value' });
    };
    res.status(201).json({ success: true, data: [...people, name] });
});

app.post('/login', (req, res) => {
    const { name } = req.body;
    if (name) {
        return res.status(200).send(`Welcome ${name}`);
    };
    res.status(401).send('Please Provide Credentials...');
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000');
});
