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
        searchTerm: ''
    }

    fetchSpecificReviews = (searchTerm) => {
        fetch(URL + `&query=${searchTerm}`)
          .then(response => response.json())
          .then(reviewData =>  {
            this.setState({ 
              reviews: reviewData.results
            })
        })
      }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.fetchSpecificReviews(this.state.searchTerm)

    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={event => this.handleSubmit(event)}>
                    <label>Search for a Review:
                        <input type="text" name="search" onChange={event => this.handleChange(event)}/>
                    </label><br></br>
                    <button type="submit">Find Reviews</button>
                </form>
                <MovieReviews reviews={this.state.reviews}/>
                <br></br>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer