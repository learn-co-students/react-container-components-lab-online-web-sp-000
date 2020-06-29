import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;



export default class SearchableMovieReviewsContainer extends Component {
    state = {
        searchTerm: "",
        reviews: []
    }

    handleSubmit = event => {
        event.preventDefault();
        fetch(URL + `&query=${this.state.searchTerm}`)
        .then(resp => resp.json())
        .then(data => {
            this.setState({reviews: data.results})
        })
        .catch(error => console.log(error));
    }

    render() {
        return <div className="searchable-movie-reviews">
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.searchTerm} onChange={event => this.setState({searchTerm: event.target.value})} />
                <input type="submit" value="Submit" />
            </form>
            <MovieReviews reviews={this.state.reviews} />
        </div>
    }
}