const asyncHandler = require('../../middleware/async.middleware');
module.exports = (() => {

  const loadServerFrontend = asyncHandler(async (req, res, next) => {
    return res.render('index');
  });

  return { loadServerFrontend };
})();