import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'RmG0SdrbXK0k4CYHGgjXnNu6YIT34Kzo';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends React.Component {
  state={
    reviews:[]
  }

  componentDidMount(){
    fetch(URL)
    .then (results => results.json())
    .then (reviews => this.setState({reviews: reviews.results}))
   
  }

  render(){
    return (<div className="latest-movie-reviews">
    <MovieReviews reviews={this.state.reviews}/>
            </div>)
  }
}

export default LatestMovieReviewsContainer
