const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_LIFETIME = process.env.JWT_LIFETIME;

const createJWT = ({ payload }) => {
    const token = jwt.sign(payload, JWT_SECRET, {
        expiresIn: JWT_LIFETIME
    });
    return token;
};

const isTokenValid = ({ token }) => {
    return jwt.verify(token, JWT_SECRET)
};

const attachCookiesToResponse = ({ res, user }) => {
    const token = createJWT({ payload: user });
    const oneDay = 1000 * 60 * 60 * 24;
    res.cookie('token', token, {
        httpOnly: true,
        expires: new Date(Date.now() + oneDay),
        secure: process.env.NODE_ENV === 'production',
        signed: true,
    });
};

module.exports = { 
    createJWT, 
    isTokenValid,
    attachCookiesToResponse
};
