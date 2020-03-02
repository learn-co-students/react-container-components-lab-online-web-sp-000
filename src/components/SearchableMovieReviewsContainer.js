import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component{
  state = {
    reviews: [],
    searchTerm: ''
  }

  doFetch = () => {
    const that = this;
    fetch(URL + `?query=${this.state.searchTerm.replace(/ /g, "-")}`)
      .then(response => response.json())
      .then(movieData => that.setState({ reviews: movieData.results }))
  }

  handler = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  submitForm = (event) => {
    event.preventDefault()
    this.doFetch()
  }

  render(){
    return (

      <div className='searchable-movie-reviews'>
      <form onSubmit={this.submitForm}>
        <input type="text" value={this.state.searchTerm} onChange={this.handler} />
        <input type="submit" value='Submit' />
      </form>
        <h1>Search Results</h1>
        <MovieReviews reviews={this.state.reviews} />
      </div>

    )
  }
}

export default SearchableMovieReviewsContainer
