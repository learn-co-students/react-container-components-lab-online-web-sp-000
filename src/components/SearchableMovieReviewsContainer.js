import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'Lbyvb9GjWDGN39vYfEzdJIgoMw4x8SxF';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      reviews: [],
      searchTerm: ''
    };
  }

  getReviews(searchTerm) {
    fetch(`${URL}&query=${searchTerm}`)
      .then(response => response.json())
      .then(json => {this.setState({reviews: json.results})
      })
  }

  handleChange = event => {
    this.setState({searchTerm: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault();
    this.getReviews(this.state.searchTerm);
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)} >
          <h2>{this.state.searchTerm}</h2>
          <input
            type="text"
            onChange={event => this.handleChange(event)}
            value={this.state.searchTerm}
          />
          <input type="submit"/>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
