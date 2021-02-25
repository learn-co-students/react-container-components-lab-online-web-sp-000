import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = {
            searchTerm: '',
            reviews: []
        }
    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.fetchReviews()
    }

    fetchReviews = () => {
        let search = this.state.searchTerm.split(' ').join('+')
        let url = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=t6JhQat86p8eAHNNZ9WHYJKDBIhBXPmt&query=${search}`
        fetch(url)
        .then(resp => resp.json())
        .then(json => this.handleReviewState(json))
        .catch(err => console.log(err))
    }

    handleReviewState = (json) => {
        const array =  json.results.map( review => review )
        if (array.length > 0) {
        this.setState({ reviews: array })
        } else {
            console.log('No results found!')
        }
    }

    render() {
        return <div className="searchable-movie-reviews">
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange}/>
                <input type="submit" value="Search Reviews" />
            </form>
            <MovieReviews reviews={this.state.reviews}/>
        </div>
    }
}
