import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'idxg61J94hS0J5kAMZEAXXQvfcmR8v2i';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here


export default class LatestMovieReviewsContainer extends Component {
    constructor(props) {
      super(props);
   
      this.state = {
        reviews: []
      };
    }
   
    componentDidMount() {
      fetch(URL)
        .then(response => response.json())
          .then((data) => {
        
              this.setState({ reviews: data.results })
          }
          )
    }
   
    renderRevews = () => {
        let count = 0
        return  this.state.reviews.map( (review) => {
            return(
            <div className='review' key={count += 1}>
               <p>{review.critics_pick}</p>
               <p>{review.display_title}</p>
               <p>{review.headline}</p>
               <p>{review.opening_date}</p>
               <p>{review.publication_date}</p>
               <p>{review.summary_short}</p>
               
           </div>
            )
        })
        
        
 
    }
   
    render() {
      return (
        <div className="latest-movie-reviews">
            < MovieReviews  reviews ={this.state.reviews}/>
        </div>
      )
    }
  }
  
