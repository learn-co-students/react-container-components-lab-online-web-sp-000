import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {

    state = {
        searchTerm: '',
        reviews: []
    }


    handleChange = e =>
      this.setState({ searchTerm: e.target.value })

  
    handleSubmit = e => {
      e.preventDefault();
  
      fetch(URL + `&query=${this.state.searchTerm}`)
        .then(response => response.json())
        .then(response => this.setState({ reviews: response.results }));
    }


    render(){
        return (
          <div className="searchable-movie-reviews">
            <form onSubmit={this.handleSubmit}>
              Search Movie Reviews:
              <input
                onChange={this.handleChange}
              />
              <button>Submit</button>
            </form>
            <br></br>
            <MovieReviews reviews={this.state.reviews} />
          </div>
        );
    }

}


export default SearchableMovieReviewsContainer