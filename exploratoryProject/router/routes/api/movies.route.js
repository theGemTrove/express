const
  express = require('express'),
  router = express.Router({ mergeParams: true }),
  { fetchCurrentlyPlayingMovieList: currentlyPlaying } = require('../../../controllers/api/movies.controller');

router
  .route('/currentlyPlaying')
  .get(currentlyPlaying);

module.exports = router;