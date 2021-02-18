import React, { Component } from 'react';
// import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'pcdgU2vDjXe0iFJCPtQCagHMsmpueWca';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?';

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    constructor () {
        super()
        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }
    conditionalRender = () => {
        console.log(this.state.reviews)
        // return this.state.reviews.any > 0 ? <MovieReviews reviews={this.state.reviews} /> : <p>Search!</p>
    }

    submitHandler = event => {
        event.preventDefault()
        fetch(`${URL}query=${this.state.searchTerm}&api-key=${NYT_API_KEY}`)
        .then(r => r.json())
        .then(d => {
            this.setState({
                reviews: d.results
            })
        })
    }

    changeHandler = event => {
        event.preventDefault()
        this.setState({
            searchTerm: event.target.value
        })

    }

    render () {
        return (
            <div className='searchable-movie-reviews'>
                <form onSubmit={this.submitHandler} >
                    <input type='text' onChange={this.changeHandler} />
                    <input type='submit' />
                </form>

                {/* {this.conditionalRender} */}

                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}
export default SearchableMovieReviewsContainer
