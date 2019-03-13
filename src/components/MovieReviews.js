import React, { Component } from "react";

const MovieReviews = props => (
  <div className="review-list">
    {props.reviews.map((review, i) => (
      <MovieReview review={review} key={i} />
    ))}
  </div>
);

export default MovieReviews;

const MovieReview = props => (
  <p className="review" key={props.review.display_title} >
    <b><a href={props.review.link.url}>{props.review.headline}</a></b>
    <br />
    by {props.review.byline}<br />
    {props.review.summary_short}
  </p>
);
