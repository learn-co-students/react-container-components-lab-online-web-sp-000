import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'UdGo4KDjMj6cSni6xuvXUQK2tKYtSAl6';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
  + `api-key=${NYT_API_KEY}` + '&query=';

export default class SearchableMovieReviewsContainer extends Component {

  state = { reviews: [], searchTerm: '' }

  performSearch = (event) => {
    event.preventDefault()
    let url = URL + this.state.searchTerm
    console.log(url);
    fetch(url)
      .then(res => res.json())
      .then(json => {
        this.setState({ reviews: json.results });
      });
  }

  handleChange(event) {
    event.persist()
    this.setState({ searchTerm: event.target.value })
  }


  render() {
    return <div className="searchable-movie-reviews">
      <form onSubmit={(e) => this.performSearch(e)}>
        <input type="text" value={this.state.searchTerm} onChange={(e) => this.handleChange(e)} />
        <input type="submit" />
      </form>
      <MovieReviews reviews={this.state.reviews} />
    </div>
  }
}
