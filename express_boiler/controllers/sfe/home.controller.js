const asyncHandler = require('../../middleware/async.middleware');
module.exports = (() => {

  const loadServerFrontend = asyncHandler(async (req, res, next) => {
    console.log('need to render index');
    return res.render('index');
  });

  return { loadServerFrontend };
})();