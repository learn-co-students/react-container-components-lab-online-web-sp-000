import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

// const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const NYT_API_KEY_DELIA = '2tGcPuJocpRonbUyWbGARFZgVywNV2Gh'
// const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            // + `api-key=${NYT_API_KEY}`;
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY_DELIA}`;

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      searchTerm: '',
      reviews: []
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    fetch(`${URL}&query=${this.state.searchTerm}`)
    .then(resp => resp.json())
    .then(movieData => {
      this.setState({
        reviews: movieData.results,
      })
    })
  }

  handleChange = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  render() {
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange}></input>
          <input type="submit"></input>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;
