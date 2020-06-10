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

    handleChange = event => {
        event.persist()
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        fetch(URL + `&query=${this.state.searchTerm}`)
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    reviews: data.results
                })
            })
    }

    render() {
        return (
            <div className="searchable-movie-review">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="searchTerm" placeholder="Review Search" value={this.state.searchTerm} onChange={this.handleChange}/>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}