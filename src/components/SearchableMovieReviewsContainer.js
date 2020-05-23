import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;


export default class SearchableMovieReviewsContainer extends Component {

  constructor() {
    super();

    this.state = {
      searchTerm: "",
      reviews: []
    }
  }

  onChange = (event) => {
    this.setState({...this.state,
      searchTerm: event.target.value})
  }

  fetchReviews = (event) => {
    event.preventDefault()

    fetch(`${URL}&query=${this.state.searchTerm}`)
    .then(resp => resp.json())
    .then(({results}) => {
      this.setState({...this.state,
        reviews: results})
    })
  }

  render() {
    return (
      <div className='searchable-movie-reviews'>
        <form onSubmit={this.fetchReviews}>
          <input onChange={this.onChange} value={this.state.searchTerm}></input>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
