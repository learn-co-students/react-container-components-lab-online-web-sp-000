import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '4MN3O8bvbYLEuqAaN0W1NRAzbF0hJYQ8';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
    constructor() {
        
        super ();
         this.state = {
             reviews: []
             
           };
    }
    
    componentDidMount() {
        fetch(URL)
        .then(resp => resp.json())
        .then(reviews=> {
            this.setState({reviews})
        })
    }

    render() { 
        return (
        <div className="latest-movie-reviews" >
            <h3>Latest Movie Reviews</h3> <MovieReviews reviews ={this.state.reviews} />
        </div>);
    }
}
 
export default LatestMovieReviewsContainer;

