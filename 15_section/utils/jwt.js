const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_LIFETIME = process.env.JWT_LIFETIME;

const createJWT = ({ payload }) => {
    const token = jwt.sign(payload, JWT_SECRET);
    return token;
};

const isTokenValid = (token) => {
    return jwt.verify(token, JWT_SECRET)
};

const attachCookiesToResponse = ({ res, user, refreshToken }) => {
    const accessTokenJWT = createJWT({ payload: { user } });
    const refreshTokenJWT = createJWT({ payload: { user, refreshToken } });

    const oneDay = 1000 * 60 * 60 * 24;

    res.cookie('accessToken', accessTokenJWT, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        signed: true,
        expires: new Date(Date.now() + oneDay),
    });

    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        signed: true,
        expires: new Date(Date.now() + oneDay),
    });
};

// const attachSingleCookieToResponse = ({ res, user }) => {
//     const token = createJWT({ payload: user });
//     const oneDay = 1000 * 60 * 60 * 24;
//     res.cookie('token', token, {
//         httpOnly: true,
//         expires: new Date(Date.now() + oneDay),
//         secure: process.env.NODE_ENV === 'production',
//         signed: true,
//     });
// };

module.exports = { 
    createJWT, 
    isTokenValid,
    attachCookiesToResponse
};
