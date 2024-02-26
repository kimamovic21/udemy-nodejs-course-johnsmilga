require('dotenv').config();

const mockData = require('./mock-data.json');
const Job = require('./models/Job');
const conncetDB = require('./db/connect');

const start = async (req, res) => {
    try {
        await conncetDB(process.env.MONGO_URI);
        await Job.create(mockData);
        console.log('Success !!!');
        process.exit(0);
    } 
    catch (error) {
        console.error(error);
        process.exit(1);
    }
};

start();
