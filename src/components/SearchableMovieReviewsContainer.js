import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
constructor(props) {
super(props)

this.state = {
    reviews: [],
    searchTerm:" "
    
}


}
handleSubmit = (event) => {
    event.preventDefault()
   let finalUrl = URL + this.state.searchTerm
    fetch(finalUrl) 
    .then(response => response.json())
    .then(reviewData => this.setState ({reviews: reviewData.results}))
  

    
   }
   handleChange = (event) => {
    this.setState ({searchTerm: event.target.value})

   }
  



  renderReviews = () => {

    return this.state.reviews.map(review => {
        return(
            <div> 
            
            
            </div>
        )
    })
  }
  render() {
      return (
          <div className = 'searchable-movie-reviews'> 
          <form onSubmit={this.handleSubmit}>
          <label htmlFor = "search-input"> Search Reviews </label>
          <input type="text" id="search-input" onChange={this.handleChange}/>
          <button type="submit" text="Search"/>

          </form> 
          <MovieReviews reviews={this.state.reviews}/>
          
          </div>
      )
  }

}
