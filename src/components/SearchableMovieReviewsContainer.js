import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends React.Component {
    constructor() {
      super();
  
      this.state = {
        reviews: [],
        searchTerm: ''
      }
    }
  
    handleSearchInputChange = event => this.setState({ searchTerm: event.target.value})
  
    handleSubmit = event => {
      event.preventDefault();
  
      fetch(URL)
        .then(response => response.json())
        .then(reviews => this.setState({ reviews: reviews.results }))
    }
  
    render() {
      return (
        <div className="searchable-movie-reviews">
          <form onSubmit={this.handleSubmit}>
            <input
              id='search-input'
              type='text'
              onChange={this.handleSearchInputChange}
            />
            <button type='submit'>Submit</button>
          </form>
          <MovieReviews reviews={this.state.reviews} />
        </div>
      )
    }
  }