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

    handleInputChange = (e) => {
        this.setState({
            ...this.state.reviews,  
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const searchUrl = URL + `&query=${this.state.searchTerm}`
        fetch(searchUrl)
            .then(res => res.json())
            .then(data => this.setState({reviews: data.results}))
    }

    render() {
        return (
            <div>
                <h2>Searched Movie Reviews</h2>
                <form onSubmit={e =>this.handleSubmit(e)}>
                    <input name="searchTerm" value={this.state.searchTerm} onChange={e => this.handleInputChange(e)} />
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