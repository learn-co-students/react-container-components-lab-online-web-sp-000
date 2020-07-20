import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '&api-key=LqqxG9hkiqpczEgw5SpnWYm1hINAUg5n';
const QUERY = 'query='
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + QUERY;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleChange = event => {
    this.setState({searchTerm: event.target.value})
    console.log(this.state)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(URL + `${this.state.searchTerm}` + NYT_API_KEY)
      .then(res => res.json())
      .then(res => this.setState({reviews: res.results}))
  }

  render() {
    return (
      <div className='searchable-movie-reviews'>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type='text' id='searchTerm' onChange={event => this.handleChange(event)}></input>
          <input type='submit' id='submit'></input>
        </form>
        {< MovieReviews reviews={this.state.reviews}/>}
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
