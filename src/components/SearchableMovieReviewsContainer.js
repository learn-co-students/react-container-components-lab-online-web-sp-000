import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {

  constructor() {
    super()
    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  onSubmitHandler = () => {
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=${this.state.searches}`)
      .then(response => response.json())
      .then(movies => {
        this.setState({
          reviews: movies.results
        })
      })
  }

  onChangeHandler = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    return(
      <div className="search-movie-reviews">
        <form onSubmit={this.onSubmitHandler}>
          <input type="text" onChange={this.onChangeHandler}></input>
        </form>
        {<MovieReviews reviews={this.state.reviews}/>}
      </div>
    )
  }

}
