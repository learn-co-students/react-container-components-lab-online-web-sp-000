import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
   state = {
      reviews: [],
      searchTerm: ''
   };

   handleSearch = event => {
      event.preventDefault();
      const queryURL = `${URL}&query=${this.state.searchTerm}`;
      // debugger
      fetch(queryURL)
         .then(res => res.json())
         .then(searchData => {
            searchData.num_results > 0 ?
               this.setState((prevState) => ({
                  ...prevState,
                  reviews: [searchData.results[0]]
               })) : alert('No results');
            // console.log(this.state)
         })
   }

   handleOnChange = event => {
      event.preventDefault();
      this.setState({
         searchTerm: event.target.value
      });
   }

   render() {
      return (
         <div className="searchable-movie-reviews">
            <form onSubmit={this.handleSearch}>
               <input type="text" onChange={this.handleOnChange} />
               <input type="submit" value="Search" />
            </form>
            <MovieReviews reviews={this.state.reviews} />
         </div>
      )
   }
}

export default SearchableMovieReviewsContainer;