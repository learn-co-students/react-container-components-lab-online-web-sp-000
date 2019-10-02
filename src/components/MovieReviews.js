import React from 'react';

const MovieReviews = ({ reviews }) => {
  return (
    <div className="review-list">
      {reviews.map(review => (
        <div className="review">
          <h2>Movie Title: {review.display_title}</h2>
          <p>Rating: {review.mpaa_rating}</p>
          <p>Critics Pick: {review.critics_pick}</p>
          <p>Byline: {review.byline}</p>
          <p>Headline: {review.headline}</p>
          <p>Summary: {review.summary_short}</p>
          <p>Review: <a href={review.link.url}>{review.link.suggested_link_text}</a></p>
        </div>
      ))}
    </div>
  );
}

export default MovieReviews