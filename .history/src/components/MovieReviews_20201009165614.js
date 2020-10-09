// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({ reviews }) => (
    <div className="review-list">
      { reviews.map(review => {
        return (
          <div className="review">
            <h3>{review.display_title}</h3>
            <h6>By: {review.byline}</h6>
            <p>{review.summary_short}</p>
          </div>
        )
      }) }
    </div>
)

export default MovieReviews;