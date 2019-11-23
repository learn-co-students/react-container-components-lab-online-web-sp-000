// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({ reviews }) => (
    <div className="review-list">
      { reviews.map(review => {
        // console.log(review)
        return (
          <div className="review">
            <h1>{review.display_title}</h1>
            <h3>By: {review.byline}</h3>
            <p>{review.summary_short}</p>
          </div>
        )
      }) }
    </div>
)

export default MovieReviews;
