// Code MovieReviews Here
import React from "react";

const MovieReviews = ({ reviews }) => {
  return (
    <div className="review-list">
      {reviews.map((review) => {
        return (
          <p className={"review"} key={review.link.url}>
            {review.display_title} by {review.byline}
          </p>
        );
      })}
    </div>
  );
};

export default MovieReviews;
