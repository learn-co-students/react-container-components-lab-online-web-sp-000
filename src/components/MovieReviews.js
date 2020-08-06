import React from 'react';

const MovieReviews = (props) => {
  return <div className="review-list">
      {props.reviews.map(review => <li className="review">{review.display_title}</li>)}
    </div>
}

export default MovieReviews;