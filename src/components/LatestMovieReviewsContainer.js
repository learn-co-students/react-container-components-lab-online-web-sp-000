import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'MAZ8cyduzH0V96l62HR0FlwypSVIyAIg';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {

    state = {
        reviews: []
    }

    componentDidMount() {
        this.fetchReviews()
    }


    fetchReviews = () => {
        fetch(URL)
        .then(response => response.json())
        .then(data => {
            this.setState({
                reviews: data.results
            })
        })
    }


   render() {
       return (
           <div className='latest-movie-reviews'>

            <MovieReviews reviews={this.state.reviews} />


           </div>
       )
   } 

}
