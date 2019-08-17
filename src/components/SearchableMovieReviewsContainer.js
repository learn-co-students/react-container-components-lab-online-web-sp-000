import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'DNkovPnE0CVEnFTFZTGE2k5n4vR94P5x';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

export default class SearchableMovieReviewsContainer extends React.Component {
  state = {
    searchTerm: '',
    reviews: []
  };

  handleSearch = event =>
  this.setState({ searchTerm: event.target.value });

  handleSubmit = (event) => {
    event.preventDefault();

    fetch(URL.concat(this.state.searchTerm))
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
      <input type="text" onChange={this.handleSearch} />
      <button type="submit">Submit</button>
      </form>
      <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}
