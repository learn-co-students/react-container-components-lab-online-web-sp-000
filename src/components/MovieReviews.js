// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({reviews}) =>
  <div className="review-list">
  {reviews.map(review => <div className="review"> {review.headline} </div>)}
  </div>

export default MovieReviews
