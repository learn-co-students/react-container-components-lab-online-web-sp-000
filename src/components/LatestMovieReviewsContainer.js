import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'WyeAJuKZHM1NRIAU7qhyZG6GVFeM7cco';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
    constructor() {
        super()

        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        fetch(URL)
            .then(resp => resp.json())
            .then(obj => {
                this.setState({
                    reviews: obj.results
                })
            })
    }

    render() {
        return(
            <div className="latest-movie-reviews">
                <MovieReviews movieReviews={this.state.reviews}/>
            </div>
        )
    }
}