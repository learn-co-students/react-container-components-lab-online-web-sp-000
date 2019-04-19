// Code MovieReviews Here
import React from 'react'

const MovieReviews = ( {reviews} ) => {
  return (
    <div className="review-list">
    { reviews.map((review) =>
      <div className="review">
        {review.display_title}
      </div>)}
    </div>
  )
}
export default MovieReviews;
