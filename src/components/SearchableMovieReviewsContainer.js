import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super();
        this.state = null;
    }

    componentDidUpdate() {
        // fix URL
        fetch("https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=<your-api-key>&query=<search-term>")
        .then(resp => resp.json())
        .then(data => {

        })
    }

    render() {
        return(
            <div className="searchable-movie-reviews">

            </div>
        )
    }
}