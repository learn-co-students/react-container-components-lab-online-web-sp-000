import React from 'react';

const MovieReviews = ({ reviews }) => {
  return (
    <div className='review-list'>
      {reviews.map((review, idx) => (
        <li className='review' key={idx}>
          {review.display_title}
        </li>
      ))}
    </div>
  );
};

export default MovieReviews;
