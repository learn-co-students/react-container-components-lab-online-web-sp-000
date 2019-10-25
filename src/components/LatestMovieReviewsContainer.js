import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'Pf2z1uTtMAwdSsefhofGywWzMAAxdjbz';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends React.Component {
    state = {
        reviews: []
    }; // ne zaboravit!!!!

    componentDidMount() {
        fetch(URL)
          .then(response => response.json())
          .then(reviewsData => this.setState({ reviews: reviewsData.results }))
      }  // reviewsData.results -> nested reviews

    render() {
        return <div className="latest-movie-reviews"><MovieReviews reviews={this.state.reviews} /></div>
      } // paretnt that RENDERS this component to screen
}

export default LatestMovieReviewsContainer;
