import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super()

    this.state= {
      reviews: [],
      searchTerm: " "
    };
  }

  handleSubmit = event => {
    event.preventDefault()
    fetch(URL + `&query=${this.state.searchTerm}`)
      .then(response => response.json())
      .then(reviewData => this.setState({ reviews: reviewData.results }))
  }

  handleChange = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    return (
      <div className="searchable-movie-reviews">

        <form onSubmit={event => this.handleSubmit(event)}>
          <div>
            <label>What would you like to search for:</label>
            <input
              onChange={event => this.handleChange(event)}
              value={this.state.searchTerm}
            />
          </div>
          <button type="submit">Find Reviews</button>
        </form>

        <h1>Searched Movie Reviews</h1>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;
