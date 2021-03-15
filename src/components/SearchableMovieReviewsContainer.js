import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'sQPLtbrUoscRtcQtCQv8mbYas6inbd08';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: "",
      reviews: []
    }
  }

  handleChange = event => this.setState(
    {searchTerm: event.target.value}
  )

  handleSubmit = event => {
    event.preventDefault();
    fetch(URL+this.state.searchTerm)
    .then(response => response.json())
    .then(reviewData => this.setState({reviews: reviewData.results}))
  }

  render() {
    return ( <div className='searchable-movie-reviews'>
      <form onSubmit={this.handleSubmit}>
        <input type='text' value={this.state.searchTerm} onChange={this.handleChange}/>
        <input type='submit'/>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
    </div>
    )
  }
}

export default SearchableMovieReviewsContainer
