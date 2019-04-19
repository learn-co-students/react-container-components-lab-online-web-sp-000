import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
// const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
//             + `api-key=${NYT_API_KEY}`;
let URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +
  `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends React.Component {
  state = {
    searchTerm: "",
    reviews: []

  }

  handleChange = (e) =>
    this.setState({ searchTerm: e.target.value });

    handleSubmit = (e) => {
      e.preventDefault();
      fetch(URL += this.state.searchTerm)
      .then(res => res.json())
      .then(res => this.setState({ reviews: res.results }));
    };

  render() {
    return (
      <div className="searchable-movie-reviews">
      <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange}/>
          <button type="submit">Submit</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
