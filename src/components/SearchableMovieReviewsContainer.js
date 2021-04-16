import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: ""
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?`+`api-key=${NYT_API_KEY}`+`&query=${this.state.searchTerm}`)
        .then(resp => resp.json())
        .then((res) => {
            this.setState({
                reviews: res.results
            })
        }) 
        .catch(err => console.log(err))  
        
    }

    handleInputChange = (e) => {
        this.setState({ 
            searchTerm: e.target.value
        })
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form className="search" onSubmit={this.handleSubmit}>
                    <input onChange={this.handleInputChange} value={this.state.searchTerm}></input>
                    <button type="submit">Submit</button>
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer