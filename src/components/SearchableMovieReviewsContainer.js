import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviews extends Component {

    constructor() {
        super();
        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    changeHandler = (e) => {
        this.setState({ searchTerm: e.target.value })
    }

    searchReviews = (e) => {
        e.preventDefault()
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=x90cZ1J9AlXqgFJwpawckVjPmlEPzqEv&query=${this.state.searchTerm}`)
        .then(resp => resp.json())
        .then(rev => this.setState({ reviews: rev.results}))
        .then(rev => console.log(rev.results))
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                 <form onSubmit={this.searchReviews}>
                    Search Reviews:
                    <input type="text" placeholder="search" value={this.state.searchTerm} onChange={this.changeHandler} label="Enter a Search Term:"/>
                    <input type="submit" value="Search" />
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}

export default SearchableMovieReviews
