import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends React.Component {
    state={
        reviews: [],
        searchTerm: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        fetch(URL + `&query=${this.state.searchTerm}`)
        .then(res => res.json())
        .then(json => this.setState({reviews: json.results}))
    }

    render(){
        return(
            <div className='searchable-movie-reviews'>
                <h1>Searchable Movie Results</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='text'
                        name='searchTerm'
                        value={this.state.searchTerm}
                        onChange={this.handleChange}
                         />
                    <input type='submit' value='Search' />
                </form>
                {this.state.reviews !== [] ? < MovieReviews reviews={this.state.reviews} /> : null}
            </div>
        )
    }
}
