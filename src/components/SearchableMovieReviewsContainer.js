import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  constructor(){
    super()
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  getMovies = (event)=> {
    event.preventDefault()
    fetch(URL)
    .then(resp => resp.json())
    .then(json => this.setState({reviews: json.results}))
  }

  sortData = (json) => {

  }

  render(){
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.getMovies}>
          <input type="submit"/>
        </form>
      <div className="movie-list">
        {this.state.reviews.map(movie => <MovieReviews display_title={movie.display_title} url={movie.url} summary={movie.summary_short} />)}
        </div>
      </div>
    )
  }
}
