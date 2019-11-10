import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';


class SearchableMovieReviewsContainer extends React.Component {
    constructor(){
        super()
            this.state = {
                reviews: [],
                searchTerm: ''
            }
        
    }

    searchMovies =() =>{       
        let URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}` + "&query=" + this.state.searchTerm;
        fetch(URL)
        .then(response => response.json())
        .then(json => {
         this.setState({
            reviews: json.results
        });  
    });
    }
    
    handleSubmit = event => {
        event.preventDefault()
        this.searchMovies()
    }

    handleChange = event => {
        this.setState({
          searchTerm: event.target.value
        })
    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <div >
                    <label >Enter a search term:</label>
                    <input id="searchTerm" name="searchTerm" type="text" onChange={this.handleChange} value={this.state.searchTerm}/>                   
                    <button type="submit">Search Movies</button>
                </div>
                
            </form>
            <h3> Search Results for {this.state.searchTerm} </h3>
            <div className = "latest-movie-reviews">
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer
