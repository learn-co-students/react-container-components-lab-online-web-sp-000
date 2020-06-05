import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'zNzGssP1OOPtiK1VQG9gCwPcxFWIorRt';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {
    constructor(){
        super()
        this.state = {
            reviews: [{display_title: ""}]
        }
        
    }

    componentDidMount() {
        fetch(URL)
          .then(response => response.json())
          .then(
            movieData => this.setState({ reviews: movieData.results })
            )
          .catch(function(error) {
            console.log(error);
          });
    }

    componentDidUpdate() {
        fetch(URL)
          .then(response => response.json())
          .then(movieData => this.setState({ reviews: movieData.results }))
          .catch(function(error) {
            console.log(error);
          });
    }

    render(){
        return(
            <div className="latest-movie-reviews">
                    { <MovieReviews reviews={this.state.reviews}/>}
            </div>
        )
    }
}

export default LatestMovieReviewsContainer