import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'XGJLEq7LcJCsvA86u6JrRheskziwfE1d';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {
	constructor() {
		super();
		this.state = {
			reviews: []
		}
	}

	fetchAll = () => {
		// console.log(URL)
		fetch(URL)
			.then(resp => resp.json())
			.then(json=> {
				this.setState({
					reviews: json.results
				})
			})
	} 

	componentDidMount() {
		this.fetchAll()
	}

	render() {
		return (
			<div className='latest-movie-reviews'>
				<MovieReviews reviews={this.state.reviews} color='red' />
			</div>
		)
	}
}

export default LatestMovieReviewsContainer;