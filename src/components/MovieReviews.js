import React from 'react';

const MovieReviews = ({ reviews }) => {
  return (
    <div class='review-list'>
      {reviews.map((review, idx) => (
        <li key={idx}>{review.summary_short}</li>
      ))}
    </div>
  );
};

export default MovieReviews;
