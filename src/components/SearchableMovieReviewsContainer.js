import React, { Component } from 'react'
import 'isomorphic-fetch'
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ'
const URL = 
  'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
    + `api-key=${NYT_API_KEY}`

class SearchableMovieReviewsContainer extends Component {

  state = {
    reviews: [],
    searchTerm: ''
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })  
  }

  handleSubmit = (event) => {
    event.preventDefault()
    
    fetch(`${URL}&query=${this.state.searchTerm}`)
    .then(response => response.json())
    .then(reviewsObj => {
      this.setState({
        reviews: reviewsObj.results
      })
    })
  }

  clearSearchResults = () => {
    this.setState({
      reviews: [],
      searchTerm: ''
    })  
  }

  render() {
    return (
      <div className='searchable-movie-reviews'>
        <h1>Search Reviews</h1>
        <form onSubmit={this.handleSubmit}>
          <input 
            type='text' 
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
          <input type='submit' value='Search'/>
        </form>
        <br/>
        {this.state.searchTerm ? 
          <button onClick={this.clearSearchResults}>Clear Search Results</button> :
          null
        }
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
