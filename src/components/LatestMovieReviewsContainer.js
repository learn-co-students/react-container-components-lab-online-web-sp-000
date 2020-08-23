import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {
    state = {
        reviews: []
    }
    fetchAllReviews() {
        fetch(URL)
        .then(response => response.json())
        .then(data => {
            this.setState({reviews: data.results})
        })
    }
    render() {
        console.log('Latest Reviews', this.state.reviews)
        return (
            <div className='latest-movie-reviews'>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
    componentDidMount() {
        this.fetchAllReviews()
    }
}
