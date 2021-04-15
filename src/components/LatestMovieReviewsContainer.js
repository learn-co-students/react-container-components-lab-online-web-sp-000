import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
    constructor() {
        super();
    
        this.state = {
            reviews: []
        };
      }
    
    fetchURLs = (searchTerm = "") => {
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=Vf5Peb4vdEoDQikrNw8QuGKe6O4NaqmD`)
          .then(response => response.json())
          .then(reviewData => {
            this.setState({
                reviews: reviewData.results
            })
          })
    }
    componentDidMount() {
        this.fetchURLs()
    }
    
   
    render() {
      // Return JSX that renders into HTML
      return (
      <div className="latest-movie-reviews">
          <p> Movies:</p>
          <MovieReviews reviews={this.state.reviews}/>
      </div>
      )
    }
  }
  
  export default LatestMovieReviewsContainer;