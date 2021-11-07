const
  express = require('express'),
  router = express.Router({ mergeParams: true }),
  {
    performSearch,
    loadMovieFeature_Homepage,
    loadMovieDetail_Page
  } = require('../../../controllers/mfe/movie.controller');

router
  .route('/homepage/search')
  .post(performSearch);

router
  .route('/homepage')
  .get(loadMovieFeature_Homepage);

router
  .route('/detail/:mid')
  .get(loadMovieDetail_Page);

module.exports = router;