import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
  constructor(){
    super()
    this.state = {
      reviews: [],
    }
  }

  componentDidMount(){
    fetch(URL)
    .then(resp => resp.json())
    .then(json => this.setState({reviews: json.results}))
  }
  render(){
    return(
      <div className="latest-movie-reviews">
      {this.state.reviews.map(movie => <MovieReviews display_title={movie.display_title} url={movie.url} summary={movie.summary_short} />)}
      </div>
    )
  }
}
