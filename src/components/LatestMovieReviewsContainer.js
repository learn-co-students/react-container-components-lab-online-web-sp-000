import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component{
    constructor(){
        super();
        this.state = {
            reviews: []
        };
    }

    handleFetch = () =>{
        const key = "o8PZaXfE4xiDot9IBG2nAiuX9wkVrbra"
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${key}`)
        .then(resp => resp.json())
        .then(data =>{ 
            this.setState({
                reviews: data.results
            })
        })
    }

    componentDidMount() {
        this.handleFetch()
    }

    componentDidUpdate(){
        
    }

    render() {
        return(
            <div className="latest-movie-reviews">
                <MovieReviews reviews={this.state.reviews} />
            </div> 
        )
    };
}
export default LatestMovieReviewsContainer
