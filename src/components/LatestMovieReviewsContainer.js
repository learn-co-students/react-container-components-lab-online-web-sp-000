import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f4L0azuKzUdmwkgf21EWGfD5jA88bI46';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      reviews: []
    };
  }

  fetchReviews = () => {
    fetch(URL)
      .then(response => response.json())
      .then(json => {
        this.setState({
          reviews: json.results
        })
      })
      .catch(error => console.error(error))
  }

  componentDidMount = () => {
    this.fetchReviews()
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default LatestMovieReviewsContainer
