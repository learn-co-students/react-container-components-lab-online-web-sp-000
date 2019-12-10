import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '2ilAGRIYLEJZ9xKYxmyDLZA7RW85GuIs';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here



export default class SearchableMovieReviewsContainer extends Component {
    constructor(){
        super()
        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    changeHandler = event => {
        this.setState({
            searchTerm: event.target.value
        })
        
    }

    submitHandler = event => {
        event.preventDefault()
        debugger
        fetch(URL + `&query=${this.state.searchTerm}`).then(resp => resp.json()).then(data => {
            
            this.setState({
                reviews: data.results
            })
        })

        this.renderReviews()
       
    }


    componentDidUpdate() {
        this.renderReviews()
    }
   


   renderReviews = () => {
        return this.state.reviews.map(review => {
            return(
                < MovieReviews title={review.display_title} author={review.byline}  link_url={review.link.url} headline={review.headline} />
            ) 
        })
    }

    searchFieldCreator() {
        return(
            <form onSubmit={event => this.submitHandler(event)} onChange={event => this.changeHandler(event)}>
                <label>Search Reviews: </label>
                <input type="text" name="searchTerm"  />
                <input type="submit" />
            </form>


            
        )
    }



    render() {
        return(
            <div className='searchable-movie-reviews'>
                {this.searchFieldCreator()}
                {this.renderReviews()}
            </div>
        )
    }
}