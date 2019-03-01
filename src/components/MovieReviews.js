import React from 'react';

const Review = ({ headline, byline, link, summary_short }) => {
  return (
    <div key={headline} className="review">
      <a href={link.url}>{headline}</a>
      <p>{byline}</p>
      <p>{summary_short}</p>
    </div>
  );
};

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

export default MovieReviews;
