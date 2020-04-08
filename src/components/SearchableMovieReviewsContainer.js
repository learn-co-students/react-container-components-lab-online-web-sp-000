import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import { render } from 'enzyme';

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

export default class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state ={
            reviews: [],
            searchTerm: ""
        }
    }
    handleSubmit = event => {
        event.preventDefault()
        fetch(URL.concat(this.state.searchTerm))
        .then(resp => resp.json())
        .then(data => this.setState({reviews: data.results}))
    }

    handleChange = event => {
        this.setState({
            searchTerm: event.target.value
        })
    }
    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                <label>Search Movie Reviews</label>
                <input type="text" id="search-term" onChange={this.handleChange}></input>
                <input type="submit" value="Submit"></input>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            
            </div>
        )
    }
}
