import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

            class SearchableMovieReviewsContainer extends Component {
            //stateless and functional
            //searchable-movie-reviews element
              state = {
                searchTerm: "",
                reviews: []
              };

              handleSearchInputChange = event =>
                this.setState({ searchTerm: event.target.value });

              handleSubmit = event => {
                event.preventDefault();

                fetch(URL.concat(this.state.searchTerm)).then(res => res.json())
                .then(res => this.setState({ reviews: res.results}));
              };

              render() {
                return (
                  <div className="searchable-movie-reviews">
                    <form onSubmit={this.handleSubmit}>
                      <label htmlFor="search-input">Search Movie Reviews</label>
                      <input id="search-input" type="text" onChange={this.handleSearchInputChange} />
                      <button type="submit">Search</button>
                    </form>
                    {typeof this.state.reviews === 'object' && this.state.reviews.length > 0}
                    <MovieReviews reviews={this.state.reviews} />
                  </div>
                )
              }
            }

            export default SearchableMovieReviewsContainer;
