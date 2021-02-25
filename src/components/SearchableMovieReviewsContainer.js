import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {

    state = {
        searchTerm: "",
        reviews: []
    }


handleChange = event => {
    this.setState({
        searchTerm: event.target.value
    })
}

    handleSubmit = (event) => {
        event.preventDefault();
        this.fetchReviews()
    }    

    fetchReviews = () => {
        fetch(URL + `&query=${this.state.searchTerm}`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                reviews: data.results
            })
        })
    }




    render() {
        return(
            <div className='searchable-movie-reviews'>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' 
                    name='searchTerm' 
                    value={this.state.searchTerm}
                    onChange={event => this.handleChange(event)}/>
                    <button type='submit'>Search</button>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }


}
