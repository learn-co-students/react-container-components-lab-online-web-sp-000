import React from 'react';

const Review = ({
    display_title,
    headline
  }) => {
    return (
      <div className="review">
        <h3>{display_title}</h3>
        <blockquote>{headline}</blockquote>
      </div>
    );
  };
  
const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;


export default MovieReviews;