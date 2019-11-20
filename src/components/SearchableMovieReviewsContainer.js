import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;


// Code SearchableMovieReviewsContainer Here
// container components are class components that maintain state
 
export default class SearchableMovieReviewsContainer extends React.Component {

    constructor() {
        super()
     
        this.state = {
          reviews: [],
          searchTerm: ''
        };
    }

    handleSubmit = event => {
        event.preventDefault()
        fetch(URL.concat(this.state.searchTerm))
        .then(resp => resp.json())
        .then(data => {
            console.log("reviews", data)
            this.setState({
                reviews: data.results
            })
        })
    }


    handleChange = event => {
        this.setState({
          searchTerm: event.target.value
        })
    }


    render() {
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} name="search" value={this.state.searchTerm} />
                    <input type="submit" value="Submit" />
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }


}
