import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
// const NYT_API_KEY = 'lQfF6LVFQDwGDdmCervBPUTMmscyY37k'; // Alternative key
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {

    state = { reviews: [] };

    // getReviews = () => {
    //     fetch(URL)
    //     .then( resp => resp.json() )
    //     .then( ({results}) => this.setState({ reviews: results }) )
    // }

    componentDidMount() {
        fetch(URL)
        .then( resp => resp.json() )
        .then( ({results}) => this.setState({ reviews: results }) )
    }

    render() {

        return(
            <div className="latest-movie-reviews">
                {/* <button onClick={this.getReviews}>Get the latest NYT Movie reviews!</button> */}
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }

}