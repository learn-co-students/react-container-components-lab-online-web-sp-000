import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

//const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
//const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
           // + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component{
    state = {
        searchTerm: '',
        reviews: []
    }

    handleChange = () => {
        this.setState({
             
        })
    }

    fetchMovieReviews = (searchTerm) => {
        fetch('https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${searchTerm}')
        .then(resp => resp.json())
        .then(({ data }) => {
            this.setState({reviews: data})
        })
    }

    render() {
        return (<form className='searchable-movie-reviews' onSubmit={this.fetchMovieReviews(this.state.searchTerm)}>
            <input type='text' onChange={event => this.setState({searchTerm: event.target.value})}></input>
            <MovieReviews reviews={this.state.reviews}/>
        </form>)
    }
}