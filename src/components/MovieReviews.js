// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props) => (
	<div className="review-list">
	<ul>{props.reviews.map(review =>
		<li className="review">
			<h3>{review.display_title}</h3>
			<h5>{review.headline} by {review.byline} on {review.publication_date}</h5>
			<p>{review.summary_short}</p>
		</li>
		)}
	</ul>
	</div>
)

export default MovieReviews;
