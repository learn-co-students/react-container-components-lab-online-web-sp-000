import React from 'react';
import ReactDOM from 'react-dom';

import LatestMovieReviewsContainer from './components/LatestMovieReviewsContainer';
import SearchableMovieReviewsContainer from './components/SearchableMovieReviewsContainer';

fetch('https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=smdVk4GGQkGPZja85sAk23KTtB77y3lX')
  .then(resp => resp.json())
  .then(json => console.log(json));
  
ReactDOM.render(
  <div className="app">
    <SearchableMovieReviewsContainer />
    <LatestMovieReviewsContainer />
  </div>,
  document.getElementById('root')
);