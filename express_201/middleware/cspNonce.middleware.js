const crypto = require('crypto');
module.exports = (req, res, next) => {
  res.locals.cspNonce = crypto.randomBytes(16).toString("hex");
  next();
};