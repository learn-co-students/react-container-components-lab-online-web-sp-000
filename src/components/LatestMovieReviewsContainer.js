import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
   state = {
      reviews: []
   };

   componentDidMount() {
      this.fetchReviews()
   }

   fetchReviews = () => {
      fetch(URL)
         .then(res => res.json())
         .then(reviewData => {
            this.setState((prevState) => ({
               ...prevState,
               reviews: [reviewData.results[0], 
                         reviewData.results[1], 
                         reviewData.results[2]]
            }));
         })
   }

   render() {
      return (
         <div className="latest-movie-reviews">
            <MovieReviews reviews={this.state.reviews} />
         </div>
      )
   }
}

export default LatestMovieReviewsContainer;