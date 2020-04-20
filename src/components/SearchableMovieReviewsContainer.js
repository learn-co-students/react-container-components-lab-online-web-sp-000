import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '8gRros5Cg7USQ61JCQJ3TAcccYavT7aW';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()
 
    this.state = {
      reviews: [],
      searchTerm: ''
    };
  }

  fetchFromTerm() {
    fetch(URL + `&query=${this.state.searchTerm}`)
    .then(response => response.json())
    .then(reviewData => this.setState({ reviews: reviewData.results }))
  }

  handleSearchChange = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = event => {
    this.fetchFromTerm()
    this.setState({
      searchTerm: ''
    })
    event.preventDefault();
  }

  render() {
    return(
      <div className='searchable-movie-reviews'>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input 
            type='text'
            name='searchTerm'
            onChange={event => this.handleSearchChange(event)}
            value={this.state.searchTerm}
          />
          <input type='submit' value='Find Movies'></input>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}