import React from 'react';
import ReactDOM from 'react-dom';

import LatestMovieReviewsContainer from './components/LatestMovieReviewsContainer';
import SearchableMovieReviewsContainer from './components/SearchableMovieReviewsContainer';

ReactDOM.render(
  <div className="app">
    <h1>New York Times moview reviews</h1>
    <SearchableMovieReviewsContainer />
    <hr/>
    <LatestMovieReviewsContainer />
  </div>,
  document.getElementById('root')
);