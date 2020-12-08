import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            searchTerm: "",
            reviews: []
        }
    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(`${URL}&query=${this.state.searchTerm}`)
        .then(resp => resp.json())
        .then(object => {
            this.setState({reviews: object.results});
        })      
    }

    render() {
        return (
        <div className="searchable-movie-reviews">
            <h2>Search Movie Reviews:</h2>
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
            </form>
            <MovieReviews reviews={this.state.reviews} />
        </div>
        )
    }
}

export default SearchableMovieReviewsContainer