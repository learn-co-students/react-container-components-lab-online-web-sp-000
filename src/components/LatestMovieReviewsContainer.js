import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f9pIZyjTO9MOaZoXnUqv8GZN5dCAtU0U0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends React.Component {
    state = {
        reviews: []
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

    render () {
        return(
            <div className="latest-movie-reviews">
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }

    componentDidMount() {
        this.fetchReviews();
    }
}

export default LatestMovieReviewsContainer;