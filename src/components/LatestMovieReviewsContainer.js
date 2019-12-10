import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '2ilAGRIYLEJZ9xKYxmyDLZA7RW85GuIs';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends Component {

    constructor() {
        super()
        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        fetch(URL).then(resp => resp.json()).then( data => {
            this.setState({
                reviews: data.results
            })
        })

    }

    renderReviews = () => {
        
        return this.state.reviews.map(lmr => {
            
            return(
                < MovieReviews title={lmr.display_title} author={lmr.byline} image={lmr.multimedia.src} link_url={lmr.link.url} headline={lmr.headline} />  
            ) 
        })
    }



    render() { 
        
        return(
            <div className="latest-movie-reviews">
                
               {this.renderReviews()}
            </div>
        )
    }
}

