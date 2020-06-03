import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {
    constructor(){
        super()
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        fetch(URL)
        .then(response => response.json())
        .then(object => {
            this.setState({
              movies: object.results      
            })
            console.log(
                this.state.movies
            )
        })
    }

    render(){
        return(
            <div>
                {/* { this.state.movies.map(movie => <Movie title={movie.title}/>)} */}
            </div>
        )
    }
}

export default LatestMovieReviewsContainer