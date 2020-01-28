import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'


const NYT_API_KEY = 'f4L0azuKzUdmwkgf21EWGfD5jA88bI46';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer
class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      reviews: [],
      searchTerm: ''
    };
  }

  handleChange = event => {
    this.setState({searchTerm: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault();
    this.fetchReviews(this.state.searchTerm);
  }

  fetchReviews(searchTerm) {
    fetch(`${URL}&query=${searchTerm}`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          reviews: json.results
        })
      })
      .catch(error => console.error(error))
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)} >
          <h3>{this.state.searchTerm}</h3>
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
