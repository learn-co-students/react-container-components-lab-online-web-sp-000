import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'EPgLNdBAFjRewiIiboJFHhkDsEwcyLpy';
const API_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key='
            + `${NYT_API_KEY}&query=`;

function apiSearch(searchTerm) {
    return fetch(urlForSearch(searchTerm))
        .then(results => results.json())
}

function urlForSearch(term) {
    return `${API_URL}${term}`
}

export default class SearchableMovieReviewsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }

    fetchResults(searchTerm) {
        apiSearch(searchTerm)
            .then(reviews => {
                this.setState({ reviews: reviews.results })
            })
    }

    updateReviews(searchTerm) {
        this.fetchResults(searchTerm);
    }

    render() {
        let reviews = ""
        if (this.state.reviews.length > 0) {
            reviews = (
            <div>
                <h1>Reviews matching your search term: </h1>
                <MovieReviews reviews={this.state.reviews} />
            </div>
            );
        }
        return (
            <div className='searchable-movie-reviews'>
                <form>
                Search reviews: <input id="searchTerm" type="text" />
                <input type="submit" onClick={e => {
                    debugger
                    let searchTerm = document.getElementById('searchTerm').value;
                    this.updateReviews(searchTerm.trim());
                }} />
                </form>
                {reviews}
            </div>
        )
    }
}