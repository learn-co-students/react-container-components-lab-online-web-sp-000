import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '4MN3O8bvbYLEuqAaN0W1NRAzbF0hJYQ8';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;
            
class SearchableMovieReviewsContainer extends Component {
    state = { 
        searchTerm: " ",
        reviews: []
     }

    handleSearch = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit = (event)=> {
        event.preventDefault();
        fetch(URL)
        .then(resp => resp.json())
        .then(reviews=> this.setState({reviews}))
    }

    render() { 
        return ( 
        <div className= "searchable-movie-reviews">
            <form onSubmit={this.handleSubmit}>
                  <input type="text" id="reviews" onChange={this.handleSearch} value={this.state.searchTerm} />
                  <button type ="submit">Search</button>
            </form>

           <h2>Reviews</h2>
           <MovieReviews reviews={this.state.reviews}/>
        </div> 
        )
    }
}
 
export default SearchableMovieReviewsContainer;
