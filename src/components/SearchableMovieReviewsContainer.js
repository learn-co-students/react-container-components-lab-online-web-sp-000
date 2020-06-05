import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'RmG0SdrbXK0k4CYHGgjXnNu6YIT34Kzo';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;


// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends React.Component {
  state ={
    reviews:[],
    searchTerm: ""
  }

handleChange = event =>{
  this.setState({
    searchTerm: event.target.value
  })
}

handleSubmit = event =>{
  event.preventDefault()
  fetch(URL+this.state.searchTerm)
  .then (results => results.json())
  .then (reviews => this.setState({reviews: reviews.results}))
}

  render(){
    return (<div><form onSubmit={this.handleSubmit}>
      <input type="text" onChange={this.handleChange}></input>
      <button type="submit">Search</button>
      </form>
      <MovieReviews reviews={this.state.reviews} />
      </div>)
  }
}

export default SearchableMovieReviewsContainer
