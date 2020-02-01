import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends React.Component {

  state={
    reviews:[],
    searchTerm:''
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    fetch(`${URL}&query=${this.state.searchTerm}`)
      .then(res=>res.json())
      .then(json=>{
        this.setState({
          reviews:json.results.map(result=>result)
        })
      })
  }

  handleClick=(e)=>{
    this.setState({
      searchTerm:e.target.value
    })
  }


  render () {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleClick}type='text'/>
          <button>Submit</button>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;
