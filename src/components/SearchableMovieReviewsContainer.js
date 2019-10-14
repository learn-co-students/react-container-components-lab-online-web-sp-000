import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'OItRbZ4pJqqxcgPPkbWziGvEiPhiXh0A';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  handleInputChange = event => {
    event.preventDefault()
    event.persist()
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(URL + '&query=' + this.state.searchTerm).then(response => response.json())
      .then(data => {
        this.setState({
          reviews: data["results"]
        })
      })
  }


  render() {
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Search Term(s)
            </label>
            <input id="query" name="query" type="text" value={this.state.searchTerm} onChange={event => this.handleInputChange(event)}/>
          </div>
          <div>
            <button type="submit">Search!</button>
          </div>
        </form>

        <div>
          <MovieReviews reviews={this.state.reviews}/>
        </div>
      </div>
    )
  }
}
