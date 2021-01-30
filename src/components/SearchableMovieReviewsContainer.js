import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
	state = {
			reviews: [],
			searchTerm: ''
	}

	fetchSearch = (event) => {
		event.preventDefault()

		fetch(URL + this.state.searchTerm)
			.then(resp => resp.json())
			.then(json=> {
				this.setState({
					reviews: json.results
				})
			})
	} 

	handleTextChange = (event) => {

		this.setState({
			searchTerm: event.target.value
		})
	}

	render() {
		return (
			<div className='searchable-movie-reviews'>
				<form onSubmit={this.fetchSearch}>
					<input type='text' onChange={this.handleTextChange} />
					<button type='submit'>Submit</button>
				</form>
				<MovieReviews reviews={this.state.reviews} color='blue'/>
			</div>
		)
	}
}

export default SearchableMovieReviewsContainer;