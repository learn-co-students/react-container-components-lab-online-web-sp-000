import React from 'react';
import MovieReview from './MovieReview'

const MovieReviews = ({reviews}) => (
  <div className="review-list">
    {reviews.map(review => <MovieReview data={review}/>)}
  </div>
)

export default MovieReviews