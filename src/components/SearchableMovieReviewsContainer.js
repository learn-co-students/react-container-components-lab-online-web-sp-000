import React, { Component } from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends React.Component {
  constructor(){
    super();
    this.state={
      reviews:[],
      searchTerm: '',
    }; 
  }

  handleSubmit = e => {
    e.preventDefault();
    fetch(BASE_URL.concat(this.state.searchTerm))
      .then(res => res.json())
      .then(response => this.setState({ reviews: response.results }))
  }

  handleChange = e => {
    this.setState({searchTerm: e.target.value});
  };

  render(){
    return(
      <div className="searchable-movie-reviews">
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} />
        <input type="submit" />
      </form>

      <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}