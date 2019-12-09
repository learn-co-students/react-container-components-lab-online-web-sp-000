// Code MovieReviews Here
import React from "react";

const MovieReviews = ({ reviews }) => {
  return <div className="review-list">{reviews.map(Review)}</div>;
};

MovieReviews.defaultProps = {
  reviews: []
};

const Review = ({ title, headline }) => {
  return (
    <div className="review">
      <h1>{title}</h1>
      <p>{headline}</p>
    </div>
  );
};

export default MovieReviews;
