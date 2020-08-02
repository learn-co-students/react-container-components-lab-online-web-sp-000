// Code MovieReviews Here
import React from 'react';

const renderReviewImage = (review) => {
  if (review.multimedia) {
    return (
      <div>
        <img src={review.multimedia.src} alt={review.display_title} width={review.multimedia.width} height={review.multimedia.height} />
        <br />
      </div>
    )
  }

  return null;
}

const MovieReviews = (props) => (
  <div className="review-list">
    {props.reviews.map(review =>
      <div className="review" key={review.headline}>
        <h3>{review.headline}</h3>
        {renderReviewImage(review)}
        <a href={review.link.url}>{review.link.suggested_link_text}</a><br />
        <strong>Author:</strong> {review.byline}<br />
        <strong>Published:</strong> {review.publication_date}<br />
        <strong>Movie:</strong> {review.display_title}<br />
        <strong>Summary:</strong> {review.summary_short}<br />
      </div>
    )}
  </div>
);

export default MovieReviews;