// Code MovieReviews Here
import React from 'react';

const MovieReviews = props => {

  var reviewsArray = Array.from(props.reviews);

  return (
    <div className="review-list">
      {reviewsArray.map((review) => (<li className='review' key={review.link.url}>{review.display_title}</li>))}<br/>
    </div>
  )
}

export default MovieReviews;
