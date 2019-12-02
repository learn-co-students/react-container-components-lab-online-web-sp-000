// Code MovieReviews Here
import React from 'react';
import Review from './Review'
 
const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    { reviews.map(review => <Review className="review" display_title={review.display_title} summary_short={review.summary_short} />) }
  </div>
)
 
export default MovieReviews;