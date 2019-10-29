import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ""
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(URL + `&query=${this.state.searchTerm}`)
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          reviews: json.results
        })
      })
  }

  handleSearchChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() { 
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label>Search: </label>
          <input type="text" onChange={this.handleSearchChange} name="search" value={this.state.searchTerm}></input>
          <input type="submit" value="Search"/>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}
 
export default SearchableMovieReviewsContainer;