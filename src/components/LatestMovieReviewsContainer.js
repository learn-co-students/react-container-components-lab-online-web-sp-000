import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
    constructor(){
        super()
        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        fetch('https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=smdVk4GGQkGPZja85sAk23KTtB77y3lX')
            .then(resp => resp.json())
            .then(json => {
                this.setState({
                    reviews: json.results
                })
            })
    }

    render() {
        return(
            <div className="latest-movie-reviews">
                {/* {console.log('hi')} */}
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}
