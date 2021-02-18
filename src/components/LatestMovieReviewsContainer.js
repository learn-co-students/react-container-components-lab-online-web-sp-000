import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
  constructor () {
    super()
    this.state = {
      reviews: []
    }
  }

  componentDidMount () {
    fetch(URL)
      .then(r => r.json())
      .then(d => {
        this.setState({reviews: d.results})
      })
  }
    
  render () {
    return (
        <div className='latest-movie-reviews'>
            <MovieReviews reviews={this.state.reviews} />
        </div>
    )
  }

}
export default LatestMovieReviewsContainer
// class component that maintains state.
// should have a top-level wrapping element with class latest-movie-reviews.