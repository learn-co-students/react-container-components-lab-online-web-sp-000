import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '9pIZyjTO9MOaZoXnUqv8GZN5dCAtU0U0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends React.Component {
    state = {
        reviews: [],
        searchTerm: ""
    }

    render () {
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={event => this.handleSubmit(event)}>
                    <input type="text" id="searchTerm" value={this.state.searchTerm} onChange={this.handleChange}></input>
                    <input type="submit"></input>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }

    handleChange = (event) => {
        event.persist();
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.fetchReviews();
    }

    fetchReviews = () => {
        fetch(URL + '&query=' + this.state.searchTerm)
        .then(response => response.json())
        .then(data => {
            this.setState({
                reviews: data.results
            })
        })
    }

}

export default SearchableMovieReviewsContainer;