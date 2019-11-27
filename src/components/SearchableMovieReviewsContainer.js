import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      searchTerm: "food"
    }
  }

  getReviews = () => {
    fetch(`${URL}&query${this.state.searchTerm}`)
    .then((response) => response.json())
    .then(json => {
      this.setState({
        reviews: json.results
      });
    });
  }

  showReviews = () => {
    if(this.state.reviews !== []) {
      return <MovieReviews reviews={this.state.reviews} />
    }
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.getReviews}>
          <label>Enter your search Term...</label>
          <input type="text"></input>
          <input type="submit"></input>
        </form>
        {this.showReviews()}
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
