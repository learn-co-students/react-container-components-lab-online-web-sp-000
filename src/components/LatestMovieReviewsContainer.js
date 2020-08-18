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
    
    .then((reviewData) => 
        {
            this.setState ({reviews: reviewData.results})
            console.log(reviewData)
        }
    )
    
    
   }
  renderReviews = () => {

    return this.state.reviews.map(review => {
        return(
            <div className="review"> 
            <h3>{review.display_title}</h3>
            <p> {review.headline}</p>
            </div>
        )
    })
  }
  
  render() {
  return (
      <div className= "latest-movie-reviews"> {this.renderReviews()} </div>
  )
  
  }

}
export default LatestMovieReviewsContainer