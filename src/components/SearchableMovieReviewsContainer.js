import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  state = {
    searchTerm: "",
    reviews: []
  };
  submitHandler = e => {
    e.preventDefault();
    fetch(URL.concat(this.state.searchTerm))
      .then(data => data.json())
      .then(review => this.setState({ reviews: review.results }));
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.submitHandler}>
          <MovieReviews reviews={this.state.reviews} />
        </form>
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
