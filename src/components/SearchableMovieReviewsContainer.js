import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
// const NYT_API_KEY = 'lQfF6LVFQDwGDdmCervBPUTMmscyY37k'; // Alternative key
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ''
    };
    
    handleSubmit = event => {
        event.preventDefault()

        fetch(`${URL}&searchTerm=${this.state.searchTerm}`)
        .then( resp => resp.json() )
        .then( ({results}) => this.setState({ reviews: results }) )
    }

    handleChange = (e) => {
        this.setState({searchTerm: e.target.value})

        // fetch(`${URL}&searchTerm=${this.state.searchTerm}`)
        // .then( resp => resp.json() )
        // .then( ({results}) => this.setState({ reviews: results }) )
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                <input type='text' onChange={ this.handleChange } value={this.state.searchTerm} />
                    <button type="submit" >Submit</button>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }

}