// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({reviews}) => (
  <div className="review-list">
    {reviews.map(review => {return <div className="review">{review["display_title"]} - {review["headline"]}</div>})}
  </div>
)

export default MovieReviews
