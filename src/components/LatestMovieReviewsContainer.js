import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'EPgLNdBAFjRewiIiboJFHhkDsEwcyLpy';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reviews: []
        }
    }
    fetchReviews = () => {
        fetch(URL)
        .then(resp => resp.json())
        .then(reviews => this.setState({ reviews: reviews.results }))
    }

    componentDidMount() {
        this.fetchReviews()
    }
    render() {
        return (
            <div className="latest-movie-reviews">
            <h2>Latest reviews</h2>
            <MovieReviews reviews={this.state.reviews}/>
          </div>
        )
    }
}
