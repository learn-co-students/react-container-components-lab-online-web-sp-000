import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'jxqeUylhAnNwKBb3cLR18GSzMUicIKN0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component{
    constructor(){
        super()
        this.state = {
            reviews: []
        }
        
    }

    componentDidMount(){
        fetch(URL)
        .then(resp=>resp.json())
        .then(json=>{
            let movieReviews = []
            json.results.map(m => movieReviews.push({display_title: m.display_title, byline: m.byline, summary_short: m.summary_short}))
            this.setState({
                reviews: movieReviews
            })
        })
    }

    render(){
        return(
            <div className = "latest-movie-reviews">
              <MovieReviews reviews = {this.state.reviews}/>

            </div>

        )
    }


}
export default LatestMovieReviewsContainer;