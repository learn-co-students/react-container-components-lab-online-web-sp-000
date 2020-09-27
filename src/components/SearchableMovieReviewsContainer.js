import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here


//provide searchable interface alowing user to enter search term
class SearchableMovieReviewsContainer extends Component {

    constructor(){
        super()
        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }

    //fetch data 
    //fetch from new york times API 
    //call to a URL 
    //api key
    handleSubmit = (event) => {
        event.preventDefault()
        const QUERY_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +
                    `query=${this.state.searchTerm}` + `&api-key=${NYT_API_KEY}`; 
        fetch(QUERY_URL)
            .then(resp => resp.json())
            .then(queryResults => 
                this.setState({
                    reviews: queryResults.results,
                    searchTerm: ''
                })
                )
    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value 
        })
    }

    render(){
        return (
            <div>
                <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
                    <label>
                        Search:
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <ol className="reviews-search-results">
                    <MovieReviews reviews = {this.state.reviews} />
                </ol>
            </div>
           
        )
    }

}

export default SearchableMovieReviewsContainer