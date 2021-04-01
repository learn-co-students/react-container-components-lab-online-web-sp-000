import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
    + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    state = {
        searchTerm: '',
        reviews: []
    };

    // Watcher for setting query
    handleSearchInputChange = event => this.setState({ searchTerm: event.target.value });

    // append query to URL and fetch data
    handleSubmit = event => {
        event.preventDefault();

        fetch(URL.concat(this.state.searchTerm))
            .then(res => res.json())
            .then(res => this.setState({ reviews: res.results }));
    };

    render() {
        return (
            <div className="searchable-movie-reviews">
                <h2>Movie Review By Search:</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                        id="search-input"
                        type="text"
                        onChange={this.handleSearchInputChange}
                    />
                    <button type="submit">Submit</button>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        );
    }
}

export default SearchableMovieReviewsContainer;