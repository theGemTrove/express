const
  express = require('express'),
  router = express.Router({ mergeParams: true }),
  {
    loadServerFrontend
  } = require('../../../controllers/sfe/home.controller');

router
  .route('/')
  .get(loadServerFrontend);

module.exports = router;