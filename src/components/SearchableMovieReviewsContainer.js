import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'MtAQi15m04nj8fjcpkZOLbbGrwtcHFCg';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(URL+'&query='+this.state.searchTerm)
      .then(response => response.json())
      .then(data => {
        this.setState({
          reviews: data.results
        })
      })
  }

  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
}

  render() {
    return <div className='searchable-movie-reviews'>
      <MovieReviews reviews={this.state.reviews}/>
      <form onSubmit={this.handleSubmit}>
      Search: <input type='text' onChange={this.handleChange}></input>
      </form>
    </div>
  }

}
            
export default SearchableMovieReviewsContainer;