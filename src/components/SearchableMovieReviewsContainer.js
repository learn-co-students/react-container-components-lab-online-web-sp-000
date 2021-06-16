import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'your-key-here';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: ''
    }

    // componentDidMount(){
    //     fetch(URL+searchterm).then(res=> res.json()).then(info => this.setState({movieSearch: info.results}))
    // }

    handleSearch = () => {
        fetch(URL+this.state.searchTerm).then(res=> res.json()).then(info => this.setState({reviews: info.results}))

    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSearch}>
                    <input type={'text'} onChange={this.handleChange}></input>
                    <button type={'submit'}>Search</button>
                </form>
                <h2>Movie Reviews By Search:</h2>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer