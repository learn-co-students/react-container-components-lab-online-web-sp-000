import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'feXt97PLMoF44UA5mCkkdHxaqP6yQDec';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { reviews: [] }
    }

    componentDidMount(){
        fetch(URL)
        .then(response => {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        })
        .then(movies => 
            this.setState({
            reviews: movies.results
        })) ;
    }


    render() { 
        
        return ( 
            <div className="latest-movie-reviews">
                <MovieReviews reviews={this.state.reviews}/>
            </div>
         );
    }
}
 
export default LatestMovieReviewsContainer;