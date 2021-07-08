import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'your-key-here';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

  constructor(props) {
    super(props);
    this.state = { reviews: [], searchTerm: ''}
  }

  handleChange = e => {
    this.setState({ searchTerm: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()

    fetch(URL.concat(this.state.searchTerm))
      .then(e => e.json())
      .then(e => this.setState({ reviews: e.results }))
  }

  render() {
    return (
      <div className="searchable-movie-reviews" >
        <h2>Searchable Movie Reviews</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Search
            <input type='text' name='search' value={this.state.searchTerm} onChange={this.handleChange}/>
          </label>
          <input type='submit' value='Search'/>
        </form>

        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}
