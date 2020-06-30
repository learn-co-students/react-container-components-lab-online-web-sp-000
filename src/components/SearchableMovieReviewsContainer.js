import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import SearchForm from './SearchForm'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='
const API_KEY = `&api-key=${NYT_API_KEY}`

class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super();
        this.state = {
            reviews: [],
            searchTerm: ""
        };
    }

    handleOnClick = (event) => {
        event.preventDefault()
        fetch(BASE_URL + this.state.searchTerm + API_KEY)
            .then(response => response.json())
            .then(json => this.setState({reviews: json.results}))
            .catch(err => console.log(err))
    }

    handleFormChange = event => {
        const {name, value} = event.target 
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <SearchForm 
                    onChange={this.handleFormChange}
                    onFormSubmit={this.handleOnClick}
                    searchTerm={this.state.searchTerm}
                />
                <h6>Search Result:</h6>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }

}

export default SearchableMovieReviewsContainer