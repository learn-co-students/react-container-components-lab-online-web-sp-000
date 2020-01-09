// // Code MovieReviews Here
import React from 'react';
 
const MovieReviews = ({ reviews }) => (
  <div className="review-list">
        {reviews.map(review => 
        <div className="review" key={review.link.url}>
          <p>{review.display_title}</p>
          <a href={review.link.url}>Review Link</a>
          <br></br>
        </div>)}
  </div>
)
 
export default MovieReviews;