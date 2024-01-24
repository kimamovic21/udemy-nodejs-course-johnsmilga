const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log('Method:', method, ' Url:', url, ' Time:', time);
    // res.send('Testing middleware');
    next();
}; 

module.exports = logger;
