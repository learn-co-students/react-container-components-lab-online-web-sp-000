import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import MovieSearch from './MovieSearch'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='
            

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: ""
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(BASE_URL + this.state.searchTerm + `&api-key=${NYT_API_KEY}`)
        .then(response => response.json())
        .then(json => {
            this.setState({reviews: json.results})
        })
        .catch(error => alert(error.message));
    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                < MovieSearch handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
                < MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}