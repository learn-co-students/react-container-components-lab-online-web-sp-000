import React from "react";

const Review = ({ headline, byline, summary_short }) => {
  return (
    <div className="review" key={headline}>
      {headline}
      {byline}
      {summary_short}
    </div>
  );
};

const MovieReviews = ({ reviews }) => (
  <div className="review-list">{reviews.map(Review)} </div>
);

export default MovieReviews;
// Your MovieReviews component should be stateless and functional.
