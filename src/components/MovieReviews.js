// Code MovieReviews Here
import React from 'react';
// import LatestMovieReviewsContainer from './LatestMovieReviewsContainer';

const MovieReviews = ({ reviews }) => {
  return (
    <div className="review-list">
      {reviews.map((review, index) => {
        return (
          <div className="review" key={index}>
            <h1>{review.display_title}</h1>
            <h2>{review.headline}</h2>
            <p>{review.summary_short}</p>
          </div>
        )
      })}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews