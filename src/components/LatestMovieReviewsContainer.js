import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'VlDG1z5NdJA1c7nAbSeIWhW1EVUmhTIC';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    this.fetchLatestMovieReviews();
  }

  fetchLatestMovieReviews = () => {
    fetch(URL)
      .then(response => response.json())
      .then(data => this.setState({ reviews: data.results }));
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <h1>Latest Movie Reviews:</h1>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}