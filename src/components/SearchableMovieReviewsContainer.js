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

    handleChangeInput = (event) => {
        this.setState({
            ...this.state.reviews,
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const searchURL = URL + `&query=${this.state.searchTerm}`
        fetch(searchURL)
            .then(res => res.json())
            .then(obj => this.setState({reviews: obj.results}))
    }


    render() {
        return (
            <div>
                <h2>Searched Reviews</h2>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <input name="searchTerm" value={this.state.searchTerm} onChange={event => this.handleChangeInput(event)} />
                    <button type="submit">Search</button>
                </form>
                <div>
                    <h4>Results</h4>
                    <MovieReviews reviews={this.state.reviews} />
                </div>
            </div>
        )
    }
}

