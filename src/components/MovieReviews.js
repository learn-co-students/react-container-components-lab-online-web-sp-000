// Code MovieReviews Here
import React from 'react';

const MovieReviews = props =>
  <ol className="review-list">
  {props.reviews.map(review => (
    <li className="review" key={review.headline}>{review.headline}</li>
  ))}
  </ol>

export default MovieReviews
