import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews.js'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()

    this.state = {
      searchTerm: '',
      reviews: []
    }
  }

  handleSearchTerm = event => {
    this.setState({ searchTerm: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    // console.log(URL + '&query=' + this.state.searchTerm)
    fetch(URL + '&query=' + this.state.searchTerm)
    .then(resp => resp.json())
    .then( movieData => {
      this.setState({reviews: movieData.results})
    })
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <h1>Search Moview Review</h1>
        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.handleSearchTerm}/>
          <input type='submit'/>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;
