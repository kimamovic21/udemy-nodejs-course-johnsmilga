const crypto = require('crypto');

// Generate a random JWT secret with 256 bits (32 bytes)
const jwtSecret = crypto.randomBytes(32).toString('hex');

console.log('Generated JWT Secret:', jwtSecret);