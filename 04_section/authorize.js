const authorize = (req, res, next) => {
    const { user } = req.query;
    if (user === 'kerim') {
        req.user = { name: 'Kerim', id: 1 };
        next();
    }
    else {
        res.status(401).send('Unathorized');
    };
};

module.exports = authorize;
