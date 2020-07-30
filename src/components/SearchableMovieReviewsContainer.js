import React, { Component, PureComponent } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends PureComponent {

    constructor() {
        super()
        this.state = {
            searchTerm: "",
            reviews: []
        }
    }

    handleSubmission = (event) => {
        event.preventDefault()
        this.generateReviews()
    }

    generateReviews = () => {
        fetch(URL + '&QUERY=' + this.state.search)
        .then(resp => resp.json())
        .then(json => this.setState({reviews: json.results}))
    }

    handleTyping = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    render() {
        return (<div className="searchable-movie-reviews">
            <form onSubmit={this.handleSubmission}>
                <input type="text" value={this.state.searchTerm} onChange={this.handleTyping} name="searchTerm"></input> <br></br>
                <input type="submit"></input>
            </form>
            <MovieReviews reviews={this.state.reviews}/>
        </div>)
    }

}

export default SearchableMovieReviewsContainer
