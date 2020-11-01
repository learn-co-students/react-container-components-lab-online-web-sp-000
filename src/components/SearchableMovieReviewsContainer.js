import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends React.Component {
    constructor() {
        super()
                
        this.state = {
            reviews: [],
            searchTerm: ''
        };
    }

    onChangeTerm = event => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        fetch(`${URL}&query=${this.state.searchTerm}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    reviews: data.results
                })                
            })
    }    
                
    render() {
        return (            
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <h3>Enter a Search Term:</h3>
                    <input onChange={event => this.onChangeTerm(event)} />
                    <button type="submit">Submit</button>
                </form>               
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )        
    }
}
                
export default SearchableMovieReviewsContainer;
