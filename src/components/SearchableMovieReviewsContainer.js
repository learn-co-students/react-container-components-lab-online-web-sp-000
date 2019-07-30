import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'oKxUIKbh7sfTVDn8JDFSfbAADs8bGZ74';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ""
  }

  handleChange = event => {
    this.setState({searchTerm: event.target.value})
  }

  fetchMovies = () => {
    fetch(URL + `&query=${this.state.searchTerm}`)
      .then(response => response.json())
      .then(data => {
        this.setState({movies: data.results})
      });
  }

  render(){
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.fetchMovies}>
          <input onChange={this.handleChange} /><br />
          <input type='submit' value="Submit" />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}