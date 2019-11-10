import React from 'react';

const MovieReviews = ({ reviews }) => {
  return (
    <ul class='review-list'>
      {reviews.map((review, idx) => (
        <li key={idx}>{review.display_title}</li>
      ))}
    </ul>
  );
};

export default MovieReviews;
