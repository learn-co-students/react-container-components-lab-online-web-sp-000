import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'w34bOcousyNGkwjRfocEXYmB28aUlU67';

export default class SearchableMovieReviewsContainer extends Component {

  constructor() {
    super()
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleChange = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.searchMovies(this.state.searchTerm)
  }

  searchMovies = (searchTerm) => {
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${searchTerm}&api-key=${NYT_API_KEY}`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        reviews: data.results
      })
      console.log(data.results)
    })
  }

  render() {
    return(
      <div className='searchable-movie-reviews'>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type='text' value={this.state.searchTerm} onChange={event => this.handleChange(event)} />
          <button type='submit'>Search NYT Movies</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
