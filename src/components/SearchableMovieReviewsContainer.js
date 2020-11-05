import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }



    componentDidMount() {
        fetch(URL).then(resp => resp.json()).then(reviewData => {
            this.setState(previousState => {
                return {
                    ...previousState,
                    reviews: reviewData['results']
                }
            })
        })
    }
    
    formHandler = (event) => {
        event.preventDefault()
        //debugger

        const search = event.target.children[0].value
        this.setState(previousState => {
            return {
                ...previousState,
                searchTerm: search
            }
        })
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${event.target.children[0].value}&api-key=${NYT_API_KEY}`).then(resp => resp.json()).then(reviewData => {
            this.setState(previousState => {
                return {
                    ...previousState,
                    reviews: reviewData['results']
                }
            })
            
        })

    }

    render () {
        return (
            <div className="searchable-movie-reviews">

            
                <form onSubmit={this.formHandler}>
                    <input type='text' name="search"></input>
                    <input type='submit'></input>
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}