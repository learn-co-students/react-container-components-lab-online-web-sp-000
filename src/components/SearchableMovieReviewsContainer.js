import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

  constructor() {
    super()
    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  componentDidMount() {
    fetch(URL)
    .then(resp => resp.formData())
    .then(searchData => {
      this.setState(previousState => {
        return {
          ...previousState,
          reviews: searchData['results']
        }
      })
    })
  }

  formHandler = (e) => {
    e.preventDefault()

    const search = e.target.children[0].value
    this.setState(previousState => {
      return {
        ...previousState,
        searchTerm: search
      }
    })
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${search}&api-key=${NYT_API_KEY}`)
    .then(resp => resp.json())
    .then(searchData => {
      this.setState(previousState => {
        return {
          ...previousState,
          reviews: searchData['results']
        }
      })
    })
  }

  render() {
    return (
    <div className="latest-movie-reviews">
      <form onSubmit={this.formHandler}>
        <input type="text" name="search"></input>
        <input type="submit"></input>
      </form>
      <MovieReviews reviews={this.state.reviews} />
    </div>
    )
  }

}

export default SearchableMovieReviewsContainer