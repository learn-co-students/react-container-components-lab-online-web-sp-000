import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

// const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const NYT_API_KEY = 'nXBIfd5xaXQA3Cj4HFDG5JbdbAJhafqu';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {

  state = {
    reviews: [],
    searchTerm: ''
  }

  handleChange = event => (
    this.setState({
      searchTerm: event.target.value
    })
  )

  handleSubmit = event => {
    event.preventDefault();
    fetch(`${URL}&query=${this.state.searchTerm}`)
      .then(resp => resp.json())
      .then(data => this.setState({reviews: data.results}))
  }


  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="search" value={this.state.searchTerm} onChange={this.handleChange} />
          <input type="submit" />
        </form>

        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
