import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviews extends Component {

    constructor() {
        super();

        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    handleSearch = event => this.setState({ searchTerm: event.target.value });

    handleSubmit = event => {
        event.preventDefault()
        fetch(URL.concat(this.state.searchTerm))
        .then(res => res.json())
        .then(res => this.setState({ reviews: res.results }));
    };

    render() {
        return(
            <div className="searchable-movie-reviews">
            <form onSubmit={this.handleSubmit}>
            <input
            id="search-input"
            onChange={this.handleSearchInputChange}
            />    
            </form>
            <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }

}
