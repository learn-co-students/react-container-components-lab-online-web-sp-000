// Code MovieReviews Here
import React from 'react'
const MovieReviews = ({reviews}) => {
    <div className="review-list">
        { reviews.map(review => <p className="review">{review.text}</p>) }
    </div>
}

export default MovieReviews
