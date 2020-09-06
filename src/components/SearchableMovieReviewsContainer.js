import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'eL6x2g5F17wWixJLOdPHQuwv1jk4PGHb';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = {
            searchTerm: "",
            reviews: []
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${URL}&query=${this.state.searchTerm}`)
          .then(response => response.json())
          .then(json => this.setState({ reviews: json.results }))
    }

    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    render() {
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input type="text" onChange={e => this.handleChange(e)} value={this.state.searchTerm}></input>
                    <input type="submit" value="Submit"></input>
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}