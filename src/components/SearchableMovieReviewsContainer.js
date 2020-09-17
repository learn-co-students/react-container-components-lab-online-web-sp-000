import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    state = { searchTerm: '', reviews: [] };

    sh = (event) => {
      event.preventDefault();
      fetch(BASE_URL.concat(this.state.searchTerm))
      .then(res => res.json())
      .then(res => this.setState({ reviews: res.results }))
      .catch(err => console.error(err.message));
    };
    
    render() {
        return (
          <div className="searchable-movie-reviews">
            <form onSubmit={this.sh}>
              <input type="text" 
                     onChange={(event) => this.setState({ searchTerm: event.target.value })} 
                     required 
              />
              <input type="submit" />
            </form>
            <MovieReviews reviews={this.state.reviews} />
          </div>
       );
  }
}