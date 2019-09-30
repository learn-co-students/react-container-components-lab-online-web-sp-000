import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'JyGP9mpdrgX2lqhmiPuJP4tzkhbV6XYR';
// const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            // + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    state = { 
        reviews: [],
        searchTerm: ''
    };

    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.handleSearch()
        this.setState({
            searchTerm: ''
        })
    }

    handleSearch = () => {
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}&api-key=${NYT_API_KEY}`)
        .then(function(response) {
            if (response.status >= 400) {
                console.log('NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO')
                throw new Error("Bad response from server");
            }
            return response.json();
        })
        .then((json) => {
            // console.log(json)
            this.setState({reviews: json.results})
        } )
    }


    render(){
        return (
            <div className='searchable-movie-reviews'>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Enter a Search Term:
                    <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Find Reviews" onSubmit={this.handleSubmit}/>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}