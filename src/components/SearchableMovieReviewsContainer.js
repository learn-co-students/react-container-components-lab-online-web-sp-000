import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'ttGhddJSJk6PHmHPv55O255MqU2jH1XL';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

 
export default class SearchableMovieReviewsContainer extends Component {

//set query to empty 
 state = {
  searchTerm: "",
  reviews: []
 }


//handle search submit and fetch

  handleSubmit = event => {
  event.preventDefault();

fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}&api-key=ttGhddJSJk6PHmHPv55O255MqU2jH1XL`)
      .then(response => response.json())
      .then(response => this.setState({ reviews: response.results }));

 }




 

  render() {
    return (
    <div className="searchable-movie-reviews">
      <form onSubmit={this.handleSubmit}>
      <input type="text" 
      onChange={event => this.setState({searchTerm: event.target.value})} />
       <button type="submit">Submit</button>
     </form>

      <MovieReviews reviews={this.state.reviews} />
    </div>
    )
  }
 
  
}
 
