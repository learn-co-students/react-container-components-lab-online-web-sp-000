import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
	state = {
		reviews: [],
		searchTerm: ""
	}

	handleChange = (e) => {
		this.setState({
			searchTerm: e.target.value
		})
	}

	getReviews = () => {
		console.log("getting searched reviews")
		fetch(URL + `&query=${this.state.searchTerm}`)
			.then(resp => resp.json())
			.then((obj) => {
				this.setState({
					reviews: obj.results
				})
			})
	}

	render() {
		return(
			<div className="searchable-movie-reviews">
				<form onSubmit={this.getReviews}>
					<input onChange={this.handleChange} type="text" value={this.state.searchTerm} />
					<input type="submit" value="Search Reviews"/>
				</form>
				<MovieReviews reviews={this.state.reviews}/>
			</div>
		)
	}
}


export default SearchableMovieReviewsContainer;