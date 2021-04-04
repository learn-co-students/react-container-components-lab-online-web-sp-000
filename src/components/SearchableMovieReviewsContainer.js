import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()

        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    componentDidMount() {
        fetch(URL)
          .then(resp => resp.json())
          .then(reviewData => this.setState({ reviews: reviewData.fault}))
    }

    render() {
        return (
           <form className="searchable-movie-reviews">
             <MovieReviews reviews={this.state.reviews}/>
           </form>
        ) 
    }
}