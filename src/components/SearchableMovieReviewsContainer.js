import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'FTR547pLfQTsyvbalF6MIaPQb22fmqVw';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component{
    state={
        searchTerm: '',
        reviews:[]
    }
    handleSearchInputChange= event =>
    this.setState({ searchTerm: event.target.value});
    handleSubmit= event => {
        fetch (URL.concat(this.state.searchTerm))
        .then(res => res.json())
        .then(res => this.setState({reviews: res.results}))
    }
    render(){
        return (
             <div className="searchable-movie-reviews">
            <form onSubmit={this.handleSubmit}>
              <input onChange={this.handleSearchInputChange}/>
              <button type="submit">Submit</button>
            </form>
             <MovieReviews reviews={this.state.reviews} />
            </div>

        )
    }
}
export default SearchableMovieReviewsContainer;