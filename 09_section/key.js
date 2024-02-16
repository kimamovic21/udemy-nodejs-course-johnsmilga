const crypto = require('crypto');

// Generate a 256-bit (32-byte) random key
const randomKey = crypto.randomBytes(32).toString('hex');

console.log('Random 256-bit key:', randomKey);