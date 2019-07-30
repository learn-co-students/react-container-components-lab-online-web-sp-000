// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({reviews}) => {
  return (<div className="review-list">
    {reviews.map((movie, i) => {
      return <li key={i} className="review">{movie.display_title}</li>
    })}
  </div>)
}

export default MovieReviews