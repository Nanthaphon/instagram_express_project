const { rateLimit} = require('express-rate-limit');
 
module.exports = rateLimit({
    windowMs: 60 * 1000,
    limit: 100,
    message: { message: "Too many request form this ip" }
})

