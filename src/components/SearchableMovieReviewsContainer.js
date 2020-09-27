import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}` + `&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    constructor(){
        super()
        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    handleSearch = (e) => {
        // console.log(e.target.value)
        this.setState({searchTerm: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();

        fetch(URL.concat(this.state.searchTerm))
        .then(response => response.json())
        .then(object => {
            // console.log(object.results)
            this.setState({reviews: object.results})
        })
    }

    render(){
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleSearch}/>
                    <button>Search Reviews</button>
                </form><br />
                
                {this.state.reviews !==  undefined && this.state.reviews.length >= 1 && <h2 style={{color:"green"}}>Review Search Results:</h2>}
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer;