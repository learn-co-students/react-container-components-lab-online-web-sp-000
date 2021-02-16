import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends React.Component {
    
    state = {
        reviews: [],
        searchTerm: ""
     }


     handleSubmit = (event) => {
        event.preventDefault()
        fetch(`${URL}&query=${this.state.searchTerm}`)
          .then(response => response.json())
          .then(movieData => this.setState({ reviews: movieData.results }))
     }

     handleInputChange = (event) => {
        this.setState({
            searchTerm: event.target.value 
        })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        Search String
                        <input
                            id="searchString"
                            name="searchString"
                            type="text"
                            onChange={this.handleInputChange}
                        />
                    </label>
                </div>
                    <div>
                        <button type="submit">Search</button>
                    </div>
                </form>
                <div>
                    <MovieReviews reviews={this.state.reviews} />
                </div>
            </div>
        );
    }

}

export default SearchableMovieReviewsContainer;