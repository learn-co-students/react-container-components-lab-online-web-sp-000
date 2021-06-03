import React from 'react'

const Review = ({headline, link}) => {
	return (
		<div className="review">
			<h1>{headline}</h1>
			<a href={link.url}>{headline}</a>
		</div>
	)
}

const MovieReviews = ({reviews}) => <div className="review-list">{reviews.map(Review)}</div>;


MovieReviews.defaultProps = {
	reviews: []
}

export default MovieReviews