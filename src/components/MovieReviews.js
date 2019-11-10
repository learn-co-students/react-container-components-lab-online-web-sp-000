import React from 'react';

const MovieReviews = ({ reviews }) => {
  return reviews.map((review) => (
    <ul class='review-list'>
      <li>{review.display_title}</li>
    </ul>
  ));
};

export default MovieReviews;
