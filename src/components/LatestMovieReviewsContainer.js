import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

 
export default class LatestMovieReviewsContainer extends Component {
 
 state = {
  reviews:  [] 
  } 
 
//realised without this name it wont work ffff
   componentDidMount() {
   fetch(`https://api.nytimes.com/svc/movies/v2/reviews/all.json?&api-key=ttGhddJSJk6PHmHPv55O255MqU2jH1XL`)
      .then(response => response.json())
      .then(data => this.setState({ reviews: data.results }));

  }

   render() {
    return (
      <div className="latest-movie-reviews">
      <MovieReviews reviews={this.state.reviews}/>  
      </div>
    )
  }
 
  
}
 
