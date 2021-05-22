import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component{
    constructor(){
        super();
        this.state = {
            reviews: []
        }
    }

    componentDidMount(){
        fetch(URL)
        .then(response => response.json())
        .then(data => this.setState({
            reviews: data.results
        }))
    }

    render(){
        return(
            <div className="latest-movie-reviews">
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}

// #### `<LatestMovieReviewsContainer>` and `<SearchableMovieReviewsContainer>`

// * Both container components should be class components that maintain state.

// * The `LatestMovieReviewsContainer` should have a top-level wrapping element with
// class `latest-movie-reviews`.

// * Optional: The `SearchableMovieReviewsContainer` should have a top-level wrapping element
// with class `searchable-movie-reviews`.