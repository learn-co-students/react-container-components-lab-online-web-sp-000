import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '8T28AYSnnY5IjHetac1wr2oA2Oud6LGj';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=';
            // + `&api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
    constructor(){
        super()

        this.state={
            reviews: [],
            searchTerm: ''
        }
    }

    handleSubmit(event){
        event.preventDefault()
        fetch(URL + this.state.searchTerm + `&api-key=${NYT_API_KEY}`)
            .then(response => response.json())
            .then(data =>
                {
                    const reviews = data.results
                    this.setState({reviews})
                })

    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={event => this.handleSubmit(event)}>
                    <input className="searchTerm" type="text" name="searchTerm" onChange={event => this.handleChange(event)}/>
                    <button type="submit">Submit</button>
                </form>
                <div className="movie-reviews">
                    <MovieReviews reviews={this.state.reviews}/>
                </div>
            </div>
        )
    }
}
