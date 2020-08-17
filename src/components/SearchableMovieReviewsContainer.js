import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleData = (reviewData) => {
    reviewData.preventDefault()
    fetch(URL + `&query=${this.state.searchTerm}`)
      .then(resp => resp.json())
      .then(reviewData => this.setState({
        reviews: reviewData.results
        })
      )}

  handleSearchTerm = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleData}>
          <input
            onChange={this.handleSearchTerm}
            value={this.state.searchTerm}/>
          <input type='submit'/>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}
