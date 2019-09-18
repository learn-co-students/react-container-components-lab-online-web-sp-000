import React from 'react';

const MovieReviews = ({ reviews }) => {
  return (
    <div className='review-list'>
      { reviews.map(review => (
        <div className='review'>
          <h3>Review Title: </h3>
          <p>Review Content: </p>
        </div>
      )) }
    </div>
  )
}

export default MovieReviews;
