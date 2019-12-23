import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      reviews: null
    }
  }

  componentDidMount = () => {
    fetch(URL)
      .then(resp => resp.json()).then(json => {this.updateState(json)});
  }

  updateState = (data) => {
    this.setState({
      reviews: data.results.slice(0, 10)
    });
  }

  render() {
    return(
      <div className={'latest-movie-reviews'}>{this.state.reviews ? <MovieReviews reviews={this.state.reviews} /> : null}</div>
    );
  }
}

export default LatestMovieReviewsContainer;

// https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ
