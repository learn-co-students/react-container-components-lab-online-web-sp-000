// Code MovieReviews Here
import React from 'react';
import Review from './Review';

const MovieReviews = ({reviews}) => (
      <div className="review-list">
            {reviews.map(review => {
                  let reviewKey = reviews.indexOf(review)+1
               return (
                  <div className="review" key={reviewKey}>
                     <Review key={reviewKey} 
                             headline={review.headline}
                             criticsPick={review.critics_pick}
                             url={review.link.url} />
                  </div>
               )
            })}
      </div>
)

export default MovieReviews;