import React from 'react';

const MovieReviews = (props) => {
  return <div className="review-list">{
    props.reviews.map((review) => {
      return (
      <div className="review">
        <div className="title">{review.display_title}</div>
        <div className="summary">{review.summary_short}</div>
        <br />
      </div>
      )
    })
  }</div>
}

export default MovieReviews;
