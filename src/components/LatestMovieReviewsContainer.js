import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

//const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const NYT_API_KEY = 'ze09mxkAV5Q6aW5bEWAWEzfHJmtqiS7S';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here


export default class LatestMovieReviewsContainer extends Component{

    constructor(props){
        super(props)
        this.state = {
            reviews: []
        }
    }

    componentDidMount(){
        fetch(URL)
        .then(resp => resp.json())
        .then(obj => {
           
            this.setState({    
                reviews: obj.results,
            })
        })
    }


    renderMovieReviews = () => {

           return (<MovieReviews reviews={this.state.reviews} />)
       
 
    }

    render(){
     return(
        <div className= "latest-movie-reviews">
           <MovieReviews reviews={this.state.reviews} />
           
        </div>
     )
    }


}
