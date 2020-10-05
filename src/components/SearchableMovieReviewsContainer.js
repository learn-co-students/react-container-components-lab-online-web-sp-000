import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      searchTerm: "",
    };
  }
  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.fetchReviews();
  };
  fetchReviews() {
    fetch(URL + `&query=${this.state.searchTerm}`)
      .then((response) => response.json())
      .then((reviewData) => this.setState({ reviews: reviewData.results }))
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input
            type="text"
            value={this.state.searchTerm}
            onChange={(event) => this.handleChange(event)}
          />
          <input type="submit" value="submit"></input>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
