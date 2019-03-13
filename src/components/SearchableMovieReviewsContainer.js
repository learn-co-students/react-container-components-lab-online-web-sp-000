import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'UdGo4KDjMj6cSni6xuvXUQK2tKYtSAl6';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
  + `api-key=${NYT_API_KEY}`+ '&query=';

export default class SearchableMovieReviewsContainer extends Component {

  state = { reviews: [] }

  performSearch = (query) => {
    let url = URL + query
    console.log(url);
    fetch(url)
      .then(res => res.json())
      .then(json => {
        this.setState({ reviews: json.results });
      });
  }

  render() {
    return <div className="searchable-movie-reviews">
      <SearchForm performSearch={this.performSearch} />
      <MovieReviews reviews={this.state.reviews} />
    </div>
  }
}


class SearchForm extends Component {

  state = { query: 'moonlight' }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.performSearch(this.state.query)
  }

  handleChange(event) {
    event.persist()
    this.setState({ query: event.target.value })
  }

  render() {
    return <form onSubmit={(e) => this.handleSubmit(e)}>
      <input type="text" value={this.state.query} onChange={(e) => this.handleChange(e)} />
      <input type="submit" />
    </form>
  }
}