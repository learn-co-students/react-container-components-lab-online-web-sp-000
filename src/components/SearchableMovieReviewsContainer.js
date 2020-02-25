import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }

    handleInputChange = event => {
        this.setState({ searchTerm: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()

        fetch(URL)
        .then(resp => resp.json())
        .then(json => this.setState({ reviews: json.results }))
    }

    render() {
        return (
        <div className="searchable-movie-reviews">
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="search-input">Search</label>
                <input
                    id="search-input"
                    type="text"
                    onChange={this.handleInputChange}
                />
                <button type="submit">Submit</button>
            </form>

            <MovieReviews reviews={this.state.reviews}/>
        </div>
        );
    }

    // componentDidMount() {
    //     this.handleInputChange()
    //     this.handleSubmit()
    // }

}

export default SearchableMovieReviewsContainer;

// insert in like 44
// { typeof this.state.reviews === 'object' && this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2> }
