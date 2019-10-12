import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL1 = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
const URL3 = `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

  state = {
    reviews: [],
    searchTerm: ""
  }

  renderReviews = () => {
    if (this.state.reviews.length > 0) {
      return <MovieReviews reviews={this.state.reviews}/>
    }
  }

  textFieldChange = (event) => this.setState({searchTerm: event.target.value})

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(URL1 + `query=${this.state.searchTerm}&` + URL3)
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          reviews: json.results
        })
      })
  }

  render(){
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            type="text"
            value={this.state.searchTerm}
            onChange={(event) => this.textFieldChange(event)}
          />
          <input type="submit"/>
        </form>
        {this.renderReviews()}
      </div>
    )
  }
}
