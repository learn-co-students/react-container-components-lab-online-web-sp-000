// Code MovieReviews Here
import React from "react";

const MovieReviews = props => {
	let displayReviews = () => {
		return props.reviews.map(review => {
			return (
				<div className="review" >
					<div className="review-title" ><b>{review.display_title}</b></div>
					<div className="review-author" ><i>{review.byline}</i></div>
					<div className="review-summary" >{review.summary_short} </div>
					<br/>
				</div>
			) 
		})
	}

	return (
		<div className="review-list">
			{displayReviews()}
		</div>
	)
}


export default MovieReviews;

