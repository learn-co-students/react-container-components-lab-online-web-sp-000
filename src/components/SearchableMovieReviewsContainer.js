import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

// https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=<your key here>
// AfojyJ0GTcwERr1HGwdE5WjKsCzfLajc

const NYT_API_KEY = 'AfojyJ0GTcwERr1HGwdE5WjKsCzfLajc';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?`;
// https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=
class SearchableMovieReviewsContainer extends Component {

  state = {
    searchTerm: "",
    reviews: []
  }

  createList = () => {
    let list = <ul>;
    list += <li>cowabunga</li></ul>;
    return list;
  }

  handleChange = e =>
    this.setState({ searchTerm: e.target.value })

  handleSubmit = e => {
    e.preventDefault();
    console.log()
    fetch(`${URL}api-key=${NYT_API_KEY}&query=${this.state.searchTerm}`)
      .then(response => response.json())
      .then(jsonResponse => this.setState({ reviews: jsonResponse.results }))
      .then(results => console.log(results))
  }

  render () {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Search terms here"
            onChange={this.handleChange}
          />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
