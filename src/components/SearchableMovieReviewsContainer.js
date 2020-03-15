import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'WyeAJuKZHM1NRIAU7qhyZG6GVFeM7cco';
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

    componentDidMount() {
        if(this.state.searchTerm !== "") {
            fetch(URL + `&query=${this.state.searchTerm}`)
            .then(resp => resp.json())
            .then(obj => {
                this.setState({
                    reviews: obj.results
                })
            })
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log("d")
        this.setState({
            searchTerm: event.target.value
        })
    }

    render() {
        return(
            <form className="searchable-movie-reviews">
                <input type="text" onSubmit={(event) => this.handleSubmit(event)}></input>
                <MovieReviews movieReviews={this.state.reviews}/>
            </form>
        )
    }
}