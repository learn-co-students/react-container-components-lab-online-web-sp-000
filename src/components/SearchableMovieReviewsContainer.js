import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

//const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const MY_KEY = 'W3OIaGVKEipGghGEHh25WkNXiw2nZyHw'
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${MY_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

  state = {
    reviews: [],
    searchTerm: ""
  }

  render() {
    return <div>
              <div>
                <form id="search-form" onChange={this.handleChange} onSubmit={this.handleSubmit}>
                  <input type="text" id="search-input"></input>
                </form>
              </div>
              <div className="searchable-movie-reviews">
                <MovieReviews reviews={this.state.reviews} />
              </div>
           </div>
  }

  handleChange = (event) => {
    this.setState({searchTerm: event.target.value}, () => console.log(this.state.searchTerm))
  }

  handleSubmit = (event) => {
    event.preventDefault();
    document.getElementById("latest-movie-reviews-id").hidden = true;
    fetch(URL + this.state.searchTerm)
    .then(response => response.json())
    .then(jsonizedResponse => this.setState({reviews: jsonizedResponse.results}, () => console.log("SearchedMovies", this.state.reviews)))
    .then (document.getElementById("search-input").value = "")
  }

}

//.then (document.getElementById("search-input").value = "")
