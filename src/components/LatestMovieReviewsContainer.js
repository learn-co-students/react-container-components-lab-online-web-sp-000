import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviews extends Component{
    constructor(){
        super()
        this.state = { reviews: "" }
        console.log("In Child")
        console.log(this.props)
    }

    shouldComponentUpdate(nextState){
        if (this.state.reviews == nextState.reviews){
            return false
        }
        else{
            return true
        }
    } 

    renderReviews = () => {
        return this.props.reviews.map(rev => {
            <div key={rev.headliner}>
                <MovieReviews details={rev} />
            </div>
        })
    }
    
    render(){
        return(
            <div className="latest-movie-reviews">
                {this.renderReviews}
            </div>
        )
    }
}