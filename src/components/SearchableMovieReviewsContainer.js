import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends React.Component {
    state = {
        searchTerm: '',
        reviews: []
    }

    handleSearch = event => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        fetch(URL)
        .then(resp => resp.json())
        .then(resp => this.setState({reviews: resp.reviews}))
    }

    render(){
        return(
        <div className="searchable-movie-reviews"> 
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleSearch} value={this.state.searchTerm} />
                <button type="submit">Search Movie Reviews</button>
            </form>

            <h3>Reviews</h3>
            <MovieReviews reviews={this.state.reviews} />
        </div>
        )
    }
}
