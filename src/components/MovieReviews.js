// Code MovieReviews Here
import React from 'react';
import Review from './Review';

const MovieReviews = ({reviews}) => (
      <div className="review-list">
            {reviews.map(review => {
               return (
                  <div className="review" key={reviews.indexOf(review)+1}>
                     <Review key={reviews.indexOf(review)+1} 
                           headline={review.headline} />
                  </div>
               )
            })}
      </div>
)

export default MovieReviews;