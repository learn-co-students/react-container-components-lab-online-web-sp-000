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
      reviews: []
    };
  }

  componentDidMount() {
    fetch(URL)
    .then(response => response.json())
    .then(data => this.setState({ reviews: data.results }));
  }

  render() {
    var reviews = Array.from(this.state.reviews);

    return(
      <div className="latest-movie-reviews">
        {reviews.map((r)=> (<li key={r.link.url}>{r.display_title}</li>))}
      </div>
    )
  }

}

export default LatestMovieReviewsContainer;
