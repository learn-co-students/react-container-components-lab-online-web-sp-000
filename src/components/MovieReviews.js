import React, { Component } from "react";
const MovieReviews = props => (
  <div className="review-list">
    {props.reviews.map(review => (
      <MovieReview review={review} key={review.display_title} />
    ))}
  </div>
);

export default MovieReviews;

const MovieReview = props => {
  return (
    <div className="review" key={props.review.display_title}>
      <p>
        <b><a href={props.review.link.url}>{props.review.headline}</a></b>
        <br />
        by {props.review.byline}<br/>
        {props.review.summary_short}
      </p>
    </div>
  );
};
