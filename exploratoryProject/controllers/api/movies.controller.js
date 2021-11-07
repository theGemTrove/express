const
  asyncHandler = require('../../middleware/async.middleware'),
  axios = require('axios');

module.exports = (() => {
  const fetchCurrentlyPlayingMovieList = asyncHandler(async (req, res, next) => {
    let
      axiosRequest_baseUrl = 'https://api.themoviedb.org/3',
      axiosRequest_pathUrl = '/movie/now_playing?',
      axiosRequest_addAuth = `api_key=${process.env.MOVIE_DB_API_KEY}`,
      axiosRequest_options = '',
      axiosRequest = `${axiosRequest_baseUrl}${axiosRequest_pathUrl}${axiosRequest_addAuth}${axiosRequest_options}`;

    const axiosResponse = await axios({ url: axiosRequest});
    return axiosResponse.data.results;
  });

  const getMovieDetailsById = asyncHandler(async (req, res, next) => {
    let
      axiosRequest_baseUrl = 'https://api.themoviedb.org/3',
      axiosRequest_pathUrl = `/movie/${req.params.mid}?`,
      axiosRequest_addAuth = `api_key=${process.env.MOVIE_DB_API_KEY}`,
      axiosRequest_options = '',
      axiosRequest = `${axiosRequest_baseUrl}${axiosRequest_pathUrl}${axiosRequest_addAuth}${axiosRequest_options}`;

    const axiosResponse = await axios({ url: axiosRequest});
    return axiosResponse.data;
  });

  const searchMovieDBFor = asyncHandler(async (req, res, next) => {
    const {userEnteredKeywords = '', searchType = 'movie'} = req.body;
    let
      axiosRequest_baseUrl = 'https://api.themoviedb.org/3',
      axiosRequest_pathUrl = `/search/${searchType}?query=${encodeURI(userEnteredKeywords)}&`,
      axiosRequest_addAuth = `api_key=${process.env.MOVIE_DB_API_KEY}`,
      axiosRequest_options = '',
      axiosRequest = `${axiosRequest_baseUrl}${axiosRequest_pathUrl}${axiosRequest_addAuth}${axiosRequest_options}`,
      axiosRequestConfig = {
        timeout: 1000
      };
    const axiosResponse = await axios({ url: axiosRequest}, axiosRequestConfig);
    return axiosResponse.data.results;
  });

  return { fetchCurrentlyPlayingMovieList, getMovieDetailsById, searchMovieDBFor };
})();