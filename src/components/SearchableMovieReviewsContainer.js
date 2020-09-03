import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends React.Component {

  constructor(){
    super();
    this.state = {
      reviews: [],
      searchTerm: ""
    };
  }

  fetchMovies(term) {
  fetch(URL)
    .then(response => response.json())
    .then(data => this.setState({ reviews: data.reviews }))
  }

  changeHandler = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.fetchMovies(this.state.searchTerm)
    this.setState({ searchTerm: "" })
  }

  render() {
    return (
<div>
        <form onSubmit={this.submitHandler}>
          <input type="text" placeholder="search" value={this.state.searchTerm} onChange={this.changeHandler} />
          <input type="submit" value="search" />
        </form>
        <div className='searchable-movie-reviews'>
        <MovieReviews reviews = {this.state.reviews} />
        </div>
</div>
    )
  }
}

  export default SearchableMovieReviewsContainer
