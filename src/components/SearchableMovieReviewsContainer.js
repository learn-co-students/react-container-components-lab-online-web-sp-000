import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component{
    
    state = {
        reviews: [],
        searchTerm: ""
    }
    
    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    searchFetch = () =>{
        fetch(`${URL}${this.state.searchTerm}`)
        .then(r => r.json())
        .then(({results}) => {
            this.setState({
                reviews: results
                 })
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={() => this.searchFetch()}>
                    <input 
                    onChange={this.handleChange}
                    type='text'
                    name='searchTerm'
                    value={this.state.searchTerm}>
                    </input>
                    <input type="submit"/>
                </form>
                <h3>your searched reviews beyotch</h3>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}