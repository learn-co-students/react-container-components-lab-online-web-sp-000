// Code MovieReviews Here
import React from 'react'
import Review from './Review'

const MovieReviews = ({ reviews }) =>
    <div className="review-list">
        { reviews.map(review => <Review display_title={review.display_title} />) }
    </div>

export default MovieReviews