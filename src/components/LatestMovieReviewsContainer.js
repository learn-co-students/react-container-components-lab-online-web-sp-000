import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'lxOE0es240t2dmtqle7V0O0aeSbyOJsL';
//'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewContainer extends Component{
    
    constructor(){
        super();
        this.state = {
            reviews: []
        }
    }

    fetchReviews = () => {
        fetch(URL)
        .then((response) => { 
            //console.log("response:", response)
            return response.json();
        })
        .then((myjson) => {
             //console.log("reviews:", myjson)
             this.setState({
                 reviews: myjson.results
             })
        })
    }

    componentDidMount(){
        this.fetchReviews();
        
    }

    render(){
        return(
            <div className="latest-movie-reviews" >
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}