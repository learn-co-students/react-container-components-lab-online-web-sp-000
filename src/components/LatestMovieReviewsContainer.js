import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
  constructor(props) {
    super()
    this.state = {
      results: []
    }
  }

  componentDidMount() {
    fetch(URL)
    .then(response => response.json())
    .then(data => {
      console.log("NYT:", data)      
      this.setState({
        results: data.results
      })
    })
  }

  render() {
  return <div className="latest-movie-reviews"><MovieReviews data={this.state.results}/></div>
  }
}
 
export default LatestMovieReviewsContainer