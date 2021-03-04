// Code MovieReviews Here
import React from 'react';
import Review from './Review';

const MovieReviews = ({reviews}) => (
      <div className="review-list">
         {console.log(reviews)}
         {reviews.map(review => {
            return (
               <Review key={reviews.indexOf(review)} 
                       headline={review.headline} />
            )
         })}
      </div>
)

export default MovieReviews;