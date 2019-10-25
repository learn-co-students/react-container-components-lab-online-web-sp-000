import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'Pf2z1uTtMAwdSsefhofGywWzMAAxdjbz';
const URL = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?"
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends React.Component {
  state = {
      reviews: [],
      searchTerm: ""
  };

  handleSubmit = event => {
    event.preventDefault()
    this.fetchReviews(this.state.searchTerm)
}

fetchReviews = (searchTerm) => {
  fetch(URL.concat(searchTerm))
    .then(res => res.json())
    .then(data => this.setState({ reviews: data.results })); // array of objects
}

  render() {
      return (
        <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input
          type="text"
          value={this.state.searchTerm}
          onChange={event => this.setState({searchTerm: event.target.value})}/>
        <button type="submit">Submit</button>

        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
      // renders MovieReviews component to show data with THIS state
      )
    }



}


export default SearchableMovieReviewsContainer;
