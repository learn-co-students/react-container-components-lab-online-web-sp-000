import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'RomRYEqFO1tWeCOvP0CaXKi7VwpllzQc';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends Component {
    constructor(props) {
        super()
        this.state = {reviews: []}
    }

    componentDidMount() {
        fetch(URL)
        .then(resp => resp.json())
        .then(json => this.setState({
            reviews: json.results
        }))
    }

    render() {
        return <MovieReviews className="latest-movie-reviews" reviews={this.state.reviews}/>
    }
}