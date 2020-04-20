// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    { reviews.map(Review) }
  </div>
)

const Review = ({ display_title }) => (
  <div className="review">
    <h3>{ display_title }</h3>
  </div>
)

export default MovieReviews