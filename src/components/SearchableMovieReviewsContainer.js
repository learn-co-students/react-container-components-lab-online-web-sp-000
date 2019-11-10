import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';
import { format } from 'path';

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ''
  };

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${URL}${this.state.searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          reviews: data.results
        });
      });
  };

  render() {
    return (
      <div className='searchable-movie-reviews'>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='searchTerm'>Enter a Term:</label>
          <input
            type='text'
            name='searchTerm'
            id='searchTerm'
            onChange={this.handleChange}
          />
          <button type='submit'>Search</button>
        </form>

        {/* {this.state.reviews.map((review) => (
          <MovieReviews display_title={review.display_title} />
        ))} */}
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
