import React from "react";

function listReviews(reviews) {

	return (
		reviews.map((review, index) => {
			return (
				<div key={index} className="review">
					<h2>{review.headline}</h2>
					<p>{review.summary_short}</p>
					<a href={review.link.url}>{review.link.url}</a>
					<br/>
					<br/>
					<br/>
				</div>
			);
		})	
	)

}

const MovieReviews = props => {

	return (
		<div className="review-list">
			{listReviews(props.reviews)}
		</div>
	)

}

export default MovieReviews;
