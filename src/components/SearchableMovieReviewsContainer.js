import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '1yIZl3gmjL19A60TAPvrz4OGdQcoG7ca';

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  fetch = (event) => {
    event.preventDefault()
    let searchTerm = this.state.searchTerm
    const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${searchTerm}&api-key=${NYT_API_KEY}`;
    fetch(URL)
    .then(resp => resp.json())
    .then(data => this.setState({reviews: data.results}))
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.fetch(event)}>
          <input type="text" name="values" onChange={event => this.setState({searchTerm: event.target.value})}
            value={this.state.searchTerm}/>
          <input type="submit"/>
        </form>
        {typeof this.state.reviews === 'object' &&
          this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
        {<MovieReviews reviews={this.state.reviews} />}
      </div>
    )
  }
}
