import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'MS5P1lWDChAWfxA8Cab9NORtvQIN42Qq';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

export default class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super();
        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }
    
    componentDidMount() {
        fetch(`${URL}`)
            .then(response => response.json())
            .then(data => this.setState({
                reviews: data.results
            }))
    }

    handleChange = event => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();

        fetch(`${URL}`.concat(this.state.searchTerm))
            .then(response => response.json())
            .then(json => this.setState({ 
                reviews: json.results 
            }))
    }

    render() {
        return (
            <div>
                <form className="searchable-movie-reviews" onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.searchTerm} onChange={this.handleChange}></input>
                    <button type="submit">Submit</button>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>

        )
    }
}