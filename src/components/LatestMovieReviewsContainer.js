import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
  + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export class LatestMovieReviewsContainer extends Component {
  constructor() {
    super()

    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(movieData => this.setState({ reviews: movieData.results }));
  }

  renderMovies = () => {
    return this.state.reviews.map(movie => {
      return (
        <MovieReviews movie={movie} key={Math.random()} />
      )
    })
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        {this.renderMovies()}
      </div>
    );
  }
}

export default LatestMovieReviewsContainer;
