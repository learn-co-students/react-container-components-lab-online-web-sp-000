// Code MovieReviews Here
import React from 'react';

const MovieReviews = props => {
  return (
    <div className="review-list">
      {((!!props.reviews) && (props.reviews.length > 0)) ?
        (props.reviews.map((review, index) => <div key={index} className="review">{review.display_title}</div>))
        : (null)}
    </div>
  )
}
export default MovieReviews;
