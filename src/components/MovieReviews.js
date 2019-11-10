import React from 'react';

const MovieReviews = ({ display_title }) => {
  return (
    <ul className='review-list'>
      <li className='review'>{display_title}</li>
    </ul>
  );
};

export default MovieReviews;
