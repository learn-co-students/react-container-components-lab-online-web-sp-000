import React from 'react';

const MovieReviews = ({ reviews }) => (

  <div className="review-list">{reviews.map(Review)}</div>
);

const Review = ({ headline, byline, summary_short }) => {
  return (
    <div className="review">
    	<div> {headline} </div>
        <div>{byline}</div>
        <p>{summary_short}</p>
    </div>
  );
};

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;