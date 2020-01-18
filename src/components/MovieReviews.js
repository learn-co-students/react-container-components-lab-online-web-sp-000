import React from 'react';
import MovieReview from './MovieReview'


const MovieReviews = (props) => {
  return(
    <div className='review-list'>
     {props.reviews.map(review =>
        <li key={review.display_title} className='review'>
            <h1>{review.headline}</h1>
        </li>
      )}
    </div>
  )}


export default MovieReviews 
