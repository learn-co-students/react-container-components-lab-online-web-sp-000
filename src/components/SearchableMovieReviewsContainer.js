import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '8iJ55uFYtzPHxvAkdG3EYW4wmoXIzJ03';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ''
  }

  handleSearch = event => {
    this.setState({ searchTerm: event.target.value });
  }

   handleSubmit = event => {
    event.preventDefault();

     fetch(URL.concat(this.state.searchTerm))
     .then(function(response) {
       if (response.status >= 400) {
         throw new Error("Bad response from server");
       }
       return response.json();
     })
     .then(data => this.setState({ reviews: data.results }));
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input id="search-input" type="text" onChange={this.handleSearch} />
          <button type="submit">Submit</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }

}

export default SearchableMovieReviewsContainer
