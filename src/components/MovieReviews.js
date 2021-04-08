// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props) => {
  const reviews = props.reviews.map( review => { return (<div className="review">
  {review.headline}
  {review.summary_short}
  {review.link.url}

  </div>

)} )
  return (<div className="review-list">{reviews}</div>)
};

export default MovieReviews;