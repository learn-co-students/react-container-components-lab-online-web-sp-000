import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
  + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      searchTerm: ""
    };
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  findReview = () => {
    fetch(`${URL}&query=${this.state.searchTerm}`)
      .then(resp => resp.json())
      .then(data => this.setState({ reviews: data.results }));
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.findReview}>
          <big>Search For a Movie Review: </big>
          <input type="text" onChange={this.handleChange} />
          <input type="submit" value="Find" />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
};

export default SearchableMovieReviewsContainer;
