// Code MovieReviews Here
import React from "react";
const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    {reviews.map((review, index) => (
      <div className="review" key={index}>
        <h1>{review.display_title}</h1>
        <p>{review.summary_short}</p>
      </div>
    ))}
  </div>
);
export default MovieReviews;
