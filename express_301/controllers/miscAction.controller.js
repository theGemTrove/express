const asyncHandler = require('../middleware/async.middleware');

module.exports = (() => {
  const backendWelcome = asyncHandler(async (req, res, next) => {
    res.json({ message: 'Welcome to the express backend. Use /api/vX to get started.' });
  });

  const noAPIVersionProvided = asyncHandler(async (req, res, next) => {
    res.json({ errorMessage: 'No API version specified. Use /api/vX to get started.' });
  });

  const noRoutesLoaded = asyncHandler(async (req, res, next) => {
    res.json({ errorMessage: 'There are no routes currently available.' });
  });

  return { backendWelcome, noAPIVersionProvided, noRoutesLoaded };
})();