import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super();
        this.state = {
            reviews: [],
            searchTerm: ''
        }
    };

    queryChange = (value) => {
        this.setState({searchTerm: value})
    };

    search = () => {
        fetch(URL + '&query=' + this.state.searchTerm)
        .then(resp => resp.json())
        .then(APIData => this.setState({ reviews: APIData.results }))
    };

    render() {
        return (
            <div className='searchable-movie-reviews'>
                <form onSubmit={this.search}>
                    <input type='text' onChange={event => this.queryChange(event.target.value)} value={this.state.searchTerm} /><br />
                    <input type='submit' />
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
};

export default SearchableMovieReviewsContainer;