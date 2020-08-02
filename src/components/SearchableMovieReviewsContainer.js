import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ""
  }

  handleChange = (event) => (
    this.setState({ searchTerm: event.target.value })
  )

  handleSubmit = (event) => {
    event.preventDefault();

    fetch(`${URL}&query=${this.state.searchTerm}`)
      .then(response => response.json())
      .then(
        reviewsData => this.setState( {reviews: reviewsData.results} )
      )
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <h2>Search movie reviews here:</h2>
          <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange} />
          <input type="submit" value="Search Movie Reviews" />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;
