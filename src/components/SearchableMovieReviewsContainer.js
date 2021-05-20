import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super();
        this.state = {
            reviews: [],
            searchTerm: ""
        };
    }

    handleSubmit = event => {
        event.preventDefault()
        fetch(`${URL}&query=${this.state.searchTerm}`)
        .then(response => response.json())
        .then(json => this.setState({reviews: json.results}))
    }

    handleChange = event => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    render() {
        return (
            <div className="latest-movie-reviews">
                <h2>Search</h2>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <input
                        type="text"
                        onChange={event => this.handleChange(event)}
                        value={this.state.query}
                    />
                    <input type="submit" value="Search" />
                </form>
                <br/>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        );
    }
}

export default SearchableMovieReviewsContainer;