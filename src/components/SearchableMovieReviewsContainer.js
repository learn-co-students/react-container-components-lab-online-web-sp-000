import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'idxg61J94hS0J5kAMZEAXXQvfcmR8v2i';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here



export default class SearchableMovieReviewsContainer extends Component {
    constructor(){
      super()
      this.state ={
        reviews: [],
        searchTerm: ''
      }
    }

   renderRevews = () => {
        let count = 0
        return this.state.reviews.map( (review) => {
            return(
            <li className='review' key={count += 1}>
               <p>{review.critics_pick}</p>
               <p>{review.display_title}</p>
               <p>{review.headline}</p>
               <p>{review.opening_date}</p>
               <p>{review.publication_date}</p>
               <p>{review.summary_short}</p>    
           </li>
            )
        })    
    
    }

    fetching() {
        fetch(URL)
          .then(response => response.json())
            .then((data) => {
               this.setState({ reviews: data.results })
            }
            )
      }
      
      handleSubmit = (e) =>{
         e.preventDefault()
         this.fetching()
      }

    render() {
      return (
        <div className="searchable-movie-reviews.">
            <form onSubmit={this.handleSubmit}>
               <button>Submit</button>
            </form>
            <ul>
            {this.renderRevews()}
            </ul>
           
        </div>
      );
    }
}

