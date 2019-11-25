import React from 'react'

const Review = review => <div className={'review'}>{review.headline}</div>

const MovieReviews = props => <div className={'review-list'}>{props.reviews.map(review => Review(review))}</div>

export default MovieReviews