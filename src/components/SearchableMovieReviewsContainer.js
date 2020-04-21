import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviews extends Component {
    constructor() {
        super();

        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        fetch(URL)
        .then(res => res.json())
        .then(json => this.setState({reviews: json})
        )
    }

    render() {
        return(
            <div className="searchable-movie-reviews">
            <MovieReviews movies={this.state.reviews}/>
            </div>
        )
    }
}
