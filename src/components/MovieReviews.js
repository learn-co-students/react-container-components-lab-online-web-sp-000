// Code MovieReviews Here
import React from 'react';

const Review = ({
    title
}) => {
  return (

    <div
      key={title}
      className="review"
    >
    </div>
  );
};

 const MovieReviews = ({
     reviews
 }) => <div className="review-list">{reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;