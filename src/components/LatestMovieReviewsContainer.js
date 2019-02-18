import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {

  state = {
    reviews: []
  }

componentDidMount() {
  console.log("didMount")

  fetch ("https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=fmNntr97k1eDGoXq9o6Sgtl8HmwT1p6w")
  .then(response => response.json())
  .then(json => {
    this.setState({
      reviews: json.results
    })
  })
}




  render() {

    console.log(this.state.reviews)
    return (
      <div className="latest-movie-reviews"><MovieReviews reviews={this.state.reviews}/></div>
    );
  }

}

export default LatestMovieReviewsContainer;
