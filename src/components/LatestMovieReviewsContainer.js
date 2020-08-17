import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'


const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
 constructor(props){
     super(props)
     this.state= {
    reviews: []

     }
 }
 componentDidMount() {
     fetch(URL)
     .then(response => response.json())
     .then(reviewData => this.setState ({reviews: reviewData.reviews}))
     console.log(response)
     
     
    }

  renderReviews = () => {

    return this.state.reviews.map(review => {
        return(
            <div> </div>
        )
    })
  }
  
  render() {
  return (
      <div className= " "> {this.renderReviews} </div>
  )
  
  }

}
export default LatestMovieReviewsContainer