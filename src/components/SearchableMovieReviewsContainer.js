import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMoviewReviewsContainer extends Component{

    constructor(props){
        super(props)
        this.state = {
            searchTerm : "",
            reviews : []
        }
    }

    handleChange = event => {
        this.setState({
            searchTerm : event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        fetch(`${URL}query=${this.state.searchTerm}`)
            .then( response => response.json() )
            .then( returnedReviews => 
                this.setState({
                    reviews: returnedReviews
                })
            )
    }

    render(){
        return(
            <div className = 'searchable-movie-reviews'>
                <form onSubmit = {this.handleSubmit}>
                    <input type='text' onChange={this.handleChange}></input>
                    <input type='submit'></input>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default SearchableMoviewReviewsContainer
