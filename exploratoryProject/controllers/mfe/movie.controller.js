const asyncHandler = require('../../middleware/async.middleware');
const fs = require('fs');
const { fetchCurrentlyPlayingMovieList, getMovieDetailsById, searchMovieDBFor } = require('../api/movies.controller');

module.exports = (() => {
  let _dao = {};

  const loadMovieFeature_Homepage = asyncHandler(async (req, res, next) => {
    let preexistingList = fs.existsSync('data/movieList.txt');
    if (preexistingList) {
      let dataBuffer = fs.readFileSync('data/movieList.txt');
      let data = JSON.parse(dataBuffer.toString());
      const randomMoviePick = Math.floor(Math.random() * data.length);
      _dao.movieData = data;
      _dao.randomMovie = data[randomMoviePick];
    } else {
      const movieData = await fetchCurrentlyPlayingMovieList();
      const randomMoviePick = Math.floor(Math.random() * movieData.length);
      _dao.movieData = movieData;
      _dao.randomMovie = movieData[randomMoviePick];
      fs.writeFileSync('data/movieList.txt', `${JSON.stringify(_dao.movieData)}`, {}, () => {});
    }

    return res.render('movie.feature.ejs', { _dao });
  });

  const loadMovieDetail_Page = asyncHandler(async (req, res, next) => {
    const movieToView = await getMovieDetailsById(req);
    _dao.movieToView = movieToView;
    return res.render('single.movie.ejs', { _dao });
  });

  const performSearch = asyncHandler(async(req, res, next) => {
    const searchResults = await searchMovieDBFor(req);
    let randomMoviePick;
    if (req.body.searchType === 'movie') {
      randomMoviePick = Math.floor(Math.random() * searchResults.length);
      _dao.movieData = searchResults;
      _dao.randomMovie = searchResults[randomMoviePick];
    } else if (req.body.searchType === 'person') {
      if (!searchResults || searchResults.length === 0) { return res.redirect('/mfe/v1/movie/homepage'); }
      const multipleResults = searchResults.length > 0 && searchResults.length !== 1;
      if (multipleResults) {
        console.log('Multiple Results Detected: ');
        let
          randomActorPick = Math.floor(Math.random() * searchResults.length),
          randomMoviePick = Math.floor(Math.random() * searchResults[randomActorPick].known_for.length),
          randomActor = searchResults[randomActorPick].name;

        let randomFilmContainer = [];
        searchResults.forEach(actor => actor.known_for.forEach(film => randomFilmContainer.push(film)));
        console.log('finalList: ', randomFilmContainer);

        _dao.randomMovie = searchResults[randomActorPick].known_for[randomMoviePick];
        _dao.movieData = randomFilmContainer;
        _dao.randomActorHighlight = randomActor;

      } else { // Only working with single result
        randomMoviePick = Math.floor(Math.random() * searchResults[0].known_for.length);
        _dao.movieData = searchResults[0].known_for;
        _dao.randomMovie = searchResults[0].known_for[randomMoviePick];
      }
    }
    return res.render('movie.feature.ejs', { _dao });
  });

  return {
    loadMovieDetail_Page,
    loadMovieFeature_Homepage,
    performSearch
  };
})();