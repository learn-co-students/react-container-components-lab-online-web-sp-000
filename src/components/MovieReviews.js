import React from "react";

const MovieReviews = props => (
  <div className="review-list">
    <ul>
      {props.reviews.map(review => (
        <li className="review">{review.byline} <br /> {review.summary_short}</li>
      ))}
    </ul>
  </div>
)

  export default MovieReviews