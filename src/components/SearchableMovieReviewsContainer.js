import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

  constructor() {
    super()
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  updateSearchTerm = (event) => {
    this.setState({
      searchTerm: event.target.value
  })
}

  handleSubmit = (event) => {
    event.preventDefault();

    const theURL = URL + `&query=${this.state.searchTerm}`;
  fetch(theURL).then( resp => resp.json() ).then( json =>
    this.setState({
    reviews: json.results
  })
)
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.searchTerm} onChange={this.updateSearchTerm}></input>

          </form>

        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }

}