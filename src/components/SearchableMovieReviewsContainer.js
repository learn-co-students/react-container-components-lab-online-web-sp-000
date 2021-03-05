import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

// const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
// // const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
// //             + `api-key=${NYT_API_KEY}`;
// const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: ""
    };

    handleChange = event =>{
        this.setState({
            ...this.state.reviews,
                searchTerm: event.target.value
        })
    }

    handleFetch =(term) =>{
        console.log(term)
        let key = "o8PZaXfE4xiDot9IBG2nAiuX9wkVrbra"
        const url = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${term}&api-key=${key}`
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            // console.log(data.results.map(result => result.display_title))
            this.setState({
                reviews: data.results
            })
        })
    }

    handleSubmit = event => {
 
        event.preventDefault();
        this.handleFetch(this.state.searchTerm)
    }

    render(){
        return(
            <div className="searchable-movie-reviews"> 
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} value={this.state.searchTerm} />
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer
