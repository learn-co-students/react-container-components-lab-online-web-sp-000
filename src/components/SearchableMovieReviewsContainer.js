import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    state = {
        searchTerm: '',
        reviews: []
    }

    handleSearchInputChange = event =>
        this.setState({searchTerm: event.target.value});

    handleSubmit = event => {
        event.preventDefault();
        fetch(BASE_URL + this.state.searchTerm)
            .then(resp => resp.json())
            .then(moviesData => this.setState({reviews: moviesData.results}))
    }

    render(){
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <label>Search Movie Reviews</label>
                    <input type="text" onChange={this.handleSearchInputChange} />
                    <button type="submit">Submit</button>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}