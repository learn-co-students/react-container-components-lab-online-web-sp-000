import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'pr2NiXxjom2FHrBEKKsk1YRNyJrdA5sj';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableReviewsContainer extends Component {

  state = {
    reviews: [],
    searchTerm: ""
  }

  handleSearchChange = event =>
  this.setState({ searchTerm: event.target.value });

  handleSubmit = (event) => {
    event.preventDefault();

    fetch(URL.concat(`&query=${this.state.searchTerm}`))
      .then(response => response.json())
      .then(data => {
        this.setState({
          reviews: data.results
        })
      })
  }

  render(){
    return(
      <div className="searchable-movie-reviews">
      <form onSubmit={this.handleSubmit}>
      <input type="text" onChange={this.handleSearchChange} />
      <button type="submit" />
      </form>
      <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}
