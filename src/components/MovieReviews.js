// Code MovieReviews Here
import React from 'react';
import LatestMovieReviewsContainer from './LatestMovieReviewsContainer';
import SearchableMovieReviewsContainer from './SearchableMovieReviewsContainer'
 
const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    {reviews.map(review =>
        <li className="review" key={review.display_title}>
            {review.display_title}
        </li> 
    )}
  </div>
)
 
export default MovieReviews;