import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'npfpRYsspNZ63h6XsSbLRKRXbwu03EdA';
const BASEURL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
    state = {
        searchTerm: ",",
        reviews: []
    }

    handleSubmit = event => {
        event.preventDefault()

        fetch(BASEURL.concat(this.state.searchTerm))
        .then(res => res.json())
        .then(res => this.setState({reviews: res.results}))
    }

    handleSearchInputChange = event => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit} >
                    <label htmlFor="search-input">Search Movie Reviews</label>
                    <input id="search-input" type="text" onChange={this.handleSearchInputChange}></input>
                    <button type="submit">Submit</button>
                </form>
                {typeof this.state.reviews === 'object' && this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer