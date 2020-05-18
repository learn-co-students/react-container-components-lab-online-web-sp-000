import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

//const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const MY_KEY = 'W3OIaGVKEipGghGEHh25WkNXiw2nZyHw'
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${MY_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {

  state = {
    reviews: []
  }

  componentDidMount() {
    fetch(URL)
    .then(response => response.json())

    .then(jsonizedResponse => this.setState({reviews: jsonizedResponse.results}, (() => console.log(this.state.reviews, "LatestMovies"))))

  }


  render() {
    return <div className="latest-movie-reviews" id="latest-movie-reviews-id">
              <MovieReviews reviews={this.state.reviews} />
           </div>
  }
}
