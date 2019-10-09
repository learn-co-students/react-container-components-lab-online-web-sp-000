import React from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = process.env.REACT_APP_API_KEY;
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends React.Component {

	state = {
		searchTerm: "",
		reviews: []
	}

	handleChange = event => {
		this.setState({
			searchTerm: event.target.value
		});
	}

	handleSubmit = event => {
		event.preventDefault();
		const searchURL = URL + `&query=${this.state.searchTerm}`;
		
		fetch(searchURL)
			.then(response => response.json())
			.then(reviewData => {
				this.setState({
					searchTerm: "",
					reviews: reviewData.results
				});
			});
	}

	render() {
		return (
			<div className="searchable-movie-reviews">
				<h1>SEARCHABLE REVIEWS</h1>
				<form onSubmit={this.handleSubmit}>
					<input type="text"
								 value={this.state.searchTerm}
								 onChange={this.handleChange} />
					<input type="submit" value="Search" />
				</form>
				<MovieReviews reviews={this.state.reviews} />
			</div>
		);
	}

}

export default SearchableMovieReviewsContainer;
