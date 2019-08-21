import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '8T28AYSnnY5IjHetac1wr2oA2Oud6LGj';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {
    constructor(){
        super()

        this.state={
            reviews: []
        }
    }

    componentDidMount() {
        fetch(URL)
            .then(response => response.json())
            .then(movies => 
                {
                    const reviews = movies.results
                    this.setState({reviews})
                })
    }

    render(){
        return(
            <div className="latest-movie-reviews">
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}
