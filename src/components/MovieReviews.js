import React from 'react';

const Review = ({display_title, summary_short}) => {
  return (
    <div className='review'>
      <b>{display_title}</b>:
      {summary_short}
    </div>
  )
}

const MovieReviews = ({reviews}) => {

  return (
    <div className='review-list'>{reviews.map(Review)}</div>
  )
}

export default MovieReviews;
