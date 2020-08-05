import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
   state ={
        reviews: [],
        searchTerm: ""
    }

    handleChange = (e) => {
      this.setState({
        searchTerm: e.target.value
      })
    }

    handleSubmit = (e) => {
      e.preventDefault();
      fetch(URL + `&query=${this.state.searchTerm}`)
      .then(res => res.json())
      .then(res => this.setState({
        reviews: res.results,
        searchTerm: ""
        })
      )
    }

    render() {
      return (
        <div className="searchable-movie-reviews">
          <h1>Searchable Movie Reviews</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              Enter a search term:
            </label>
            <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
            <input type="submit" value="Find Reviews" />
          </form>
          <MovieReviews reviews={this.state.reviews}/>
        </div>
      )
    }
  }

  export default SearchableMovieReviewsContainer 