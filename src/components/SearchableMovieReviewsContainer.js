import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = { 
            reviews: [],
            searchTerm: ''
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=bp2G2whPqr33n2A5e10q5VbVKAQgsNBG&query=${this.state.searchTerm}`)
        .then(response => response.json())
        .then(reviewData => this.setState({ reviews: reviewData.results }))
    }

    // componentDidMount() {
    //     fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=bp2G2whPqr33n2A5e10q5VbVKAQgsNBG&query=${this.state.query}`)
    //     .then(response => response.json())
    //     .then(reviewData => console.log(reviewData))
    // }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input type='text' value={this.searchTerm} name="searchTerm" onChange={this.handleChange}></input>
                    <input type='submit' value="search reviews"></input>
                </form>

                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer;