import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
  constructor(){
    super()
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  componentDidMount(searchTerm) {
    let url = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${searchTerm}?api-key=${NYT_API_KEY}`
    fetch(url)
      .then(response => response.json())
      .then(reviews => this.setState({ reviews }))
  }

  handleSubmit = event => {
    event.preventDefault();
    this.componentDidMount(this.state.searchTerm)
  }

  render(){
    return (
      <div className='searchable-movie-reviews'>
        <form onSubmit={this.handleSubmit}>
          <h3>Search Term: </h3>
          <input type='text' name='searchTerm' value={this.state.searchTerm} onChange={event => {this.setState({searchTerm: event.target.value})}}/>
        </form>
        <div>
          <MovieReviews reviews={this.state.reviews} />
        </div>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;
