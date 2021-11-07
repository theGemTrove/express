const axios = require('axios');
module.exports.fetchMovieDataFromAPI = () => {
  const
    apiKey = '382aaf4794b57538fd6c08200dd44efe',
    apiBaseURL = 'https://api.themoviedb.org/3',
    apiQuery = '/movie/now_playing?',
    key = 'api_key=' + apiKey, // TODO: Remove This
    nowPlayingURL = `${apiBaseURL}${apiQuery}${key}`,
    imageBaseURL = 'https://image.tmdb.org/t/p/w300';




  /*  return request.get(nowPlayingURL, (err, callResponse, movieData) => {
    console.log('========= Error ==========');
    console.log(err);
    console.log('========= Resp  ==========');
    console.log(JSON.parse(callResponse.body));
  });*/
};