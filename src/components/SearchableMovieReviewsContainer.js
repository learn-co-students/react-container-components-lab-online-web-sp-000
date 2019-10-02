import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'VlDG1z5NdJA1c7nAbSeIWhW1EVUmhTIC';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: ''
    };
  }

  fetchSearchableMovieReviews = () => {
    let searchURL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}&api-key=${NYT_API_KEY}`;
    fetch(searchURL)
      .then(response => response.json())
      .then(data => this.setState({ reviews: data.results }));
  }

  handleSubmit = event => {
    event.preventDefault();
    this.fetchSearchableMovieReviews();
  }

  render() {
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          Movie Review Search:<input type="text" value={this.state.searchTerm} onChange={event => this.setState({ searchTerm: event.target.value })}></input>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}