import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '6wMSkszq51APi4GKrbKEWUKS7M6IZ04o';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super()
 
    this.state = {
      reviews: []
    };
  }

  fetchMovies(){
    fetch(URL)
      .then(response => response.json())
      .then(data=> this.setState({ reviews: data.results }))
  }

  componentDidMount() {
    this.fetchMovies()
  }
 
  render() {
    
    return (
    <div className= 'latest-movie-reviews'>
     <MovieReviews reviews={this.state.reviews} />
    </div>
    )
  }
}
 
export default LatestMovieReviewsContainer;