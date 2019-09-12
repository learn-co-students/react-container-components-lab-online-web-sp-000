import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

// const API_KEY = process.env.NYT_API_KEY

const NYT_API_KEY = '8U8paO2GihY6Ax3pAPxVMfFlaqGmGcBn'
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here


export default class LatestMoviewReviewsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            reviews: []
          };
    }
    componentDidMount() {
        fetch(URL)
        .then(response => response.json())
        .then(data => {
          this.setState({
            reviews: data.results
          })
        })
      }
 
      render() {
        return <div className="latest-movie-reviews"><MovieReviews reviews={this.state.reviews} /></div>
      }
    }
 
