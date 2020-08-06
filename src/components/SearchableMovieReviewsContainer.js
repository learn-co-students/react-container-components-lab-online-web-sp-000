import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import { ResolvePlugin } from 'webpack';

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {

  constructor(){
    super()
    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  handleOnChange = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.fetchSearch(this.state.searchTerm)
  }

  fetchSearch = (searchTerm) => {
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=3AweMnEuasQhGvAfSdMgmAEBMb1tUaLXquery=${searchTerm}`)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          reviews: data.results
        })
      })
  }


  render(){
    return(
      <div className="searchable-movie-reviews">
          <form onSubmit={this.handleSubmit}>
            <h3>Search</h3>
            <input type="text" onChange={this.handleOnChange} />
          </form>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
