import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault
        fetch(URL + this.searchTerm)
        .then(res => res.json())
        .then(reviewData => this.setState({ reviews: reviewData }))
    }

    render() {
        return(
            <div className="searchble-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={this.state.search}></input>
                    <button type='submit'>Search</button>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}