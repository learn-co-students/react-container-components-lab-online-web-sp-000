import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'


const NYT_API_KEY = 'api-key=diTpx5rvKIV4U7cUttoeh9IPTEHvHdqK';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?`

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    constructor () {
        super()
        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }

    componentDidMount (searchTerm) {
        fetch(URL+searchTerm+NYT_API_KEY)
        .then(response => response.json())
        .then(data => {
          this.setState({
            reviews: data.results
          })
        })
    }

    handleInputChange = (event) => {
        this.setState(
            {searchTerm: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.componentDidMount(this.state.searchTerm)
    }



    render () {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <label for="search-term">Enter a Search Term:</label><br />
                <input type="text" id="search-term" value={this.state.value} onChange={this.handleInputChange} /><br />
                <input type="submit" className="btn btn-success" value="Search" />
                <br /><br />
            </form>
            <div className='searchable-movie-reviews'>
                {typeof this.state.reviews === 'object' &&
                this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
                <MovieReviews reviews={this.state.reviews} />
        </div>
            </div>
        )

    }
}

export default SearchableMovieReviewsContainer