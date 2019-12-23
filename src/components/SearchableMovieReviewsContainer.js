import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      reviews: null
    }
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch(`${URL}&query=${this.state.searchTerm}`)
      .then(resp => resp.json()).then(json => {this.renderResults(json)});
  }

  renderResults = (data) => {
    this.setState({
      reviews: data.results.slice(0, 10)
    });
  }

  render() {
    return(
      <div className={'searchable-movie-reviews'}>
        <form onSubmit={this.handleSubmit}>
          <label>Search Reviews</label>
          <input onChange={this.handleChange}
            value={this.state.searchTerm}
            type={'text'}
            id={'search-reviews'} />
          <input type={'submit'} value={'Search'} />
        </form>

        <div className={'search-results'}>
          {this.state.reviews ? <MovieReviews reviews={this.state.reviews} /> : null}
        </div>
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
