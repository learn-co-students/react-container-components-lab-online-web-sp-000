// Code MovieReviews Here

import React from 'react'

const MovieReviews = ({ reviews }) => {
  return (
    <div className="review-list">{reviews.map(formatReview)}</div>
  )
};

const formatReview = review => {
  return (
    <ul className="review" key={review.headline}>
      <h3>{review.display_title}</h3>
    </ul>
  )
};

MovieReviews.defaultProps = {
  reviews: []
};
export default MovieReviews
