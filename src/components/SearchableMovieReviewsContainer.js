import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            reviews: [],
            search: ""
        }
    }

    componentDidMount() {
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=<${this.state.search}>`+ `api-key=${NYT_API_KEY}`)
      .then(response => response.json())
      .then(reviewData => this.setState({ reviews: reviewData.reviews }))
    }

    render() {
        return (
            <input value="Search Movies Here" onChange={this.handleOnChange} />
            <div className="searchable-movie-reviews">
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}