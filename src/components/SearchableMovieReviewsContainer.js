import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'SrPF9J23iAwVlUwd0fJZmbfeCdU3Ulpc';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
  state = { 
    reviews: [],
    searchTerm: ""
   }

  handleSearchTermChange = e => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    fetch(URL.concat(this.state.searchTerm))
    .then(res => res.json())
    .then(res => this.setState({
      reviews: res.result
    }))
  }

  render() { 
    return ( 
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleSearchTermChange} value={this.state.searchTerm}/>
          <button type="submit">Submit</button>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
     );
  }
}
 
export default SearchableMovieReviewsContainer;
