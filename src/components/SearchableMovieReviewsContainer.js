import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();
 
    this.state = {
      reviews: [],
      searchTerm: ""
    };
  }

  fetchMovies = searchTerm => {
    fetch(URL + `&searchTerm=${searchTerm}`)
      .then(res => res.json())
      .then(data => this.setState({ reviews: data.results }))
  }

  handleSubmit = event => {
    event.preventDefault()
    this.fetchMovies(this.state.searchTerm)
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <h2>Searchable Movie Reviews</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.searchTerm} onChange={event => this.setState({searchTerm: event.target.value})} />
          <input type="submit" />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;