import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}` 

export default class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ''
    }

    componentDidMount() {
        this.fetchReviews()
    }
            
    fetchReviews = () => {
        fetch(`${URL}&query=${this.state.searchTerm}`)
        .then(response => response.json())
        .then(reviews => {
            this.setState({
                reviews: reviews.results
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
        this.fetchReviews()
    }


        render() {
            return ( 
                <div className='searchable-movie-reviews'>
                    <h1>Searchable Movie Reviews</h1>
                    <form onSubmit={this.handleSubmit}>
                     <input type="text" placeholder='Enter search term' value={this.state.searchTerm} onChange={this.handleChange}></input>
                     <input type="submit"></input>
                 </form>
                  <MovieReviews reviews={this.state.reviews}/>
                </div>
            )
        }
    }
