// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({ reviews }) => (
    <div className="review-list" >
    { reviews.map(review =>
    <ul className="review" key={review.headline}>
        <h3>{review.display_title}</h3>
        <li>{review.headline}</li>
        <li>{review.summary_short}</li>
    </ul>) }
  </div>
)

MovieReviews.defaultProps = {
    reviews: []
  };

export default MovieReviews;

// component only for SHOWING data
