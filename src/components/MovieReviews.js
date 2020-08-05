// Code MovieReviews Here
import React from 'react';
const MovieReviews = props => <div className='review-list'>{props.reviews.map(review => <div className='review'><h3>{review.display_title}</h3><p>{review.summary_short}</p></div>)} </div>

MovieReviews.defaultProps = {
    reviews: []
  };

export default MovieReviews

