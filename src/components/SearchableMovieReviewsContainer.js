import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";
import { normalize } from "path";

const NYT_API_KEY = "f98593a095b44546bf4073744b540da0";
const URL =
  `https://api.nytimes.com/svc/movies/v2/reviews/search.json?` +
  `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends React.Component {
  state = {
    reviews: [],
    searchTerm: ""
  };

  changeSearchTerm = event => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch(URL.concat(this.state.searchTerm))
      .then(resp => resp.json())
      .then(reviews => this.setState({ reviews: reviews.results }));
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.changeSearchTerm} />
          <button type="submit">Search</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
