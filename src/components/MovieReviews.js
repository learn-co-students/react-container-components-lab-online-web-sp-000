import React from 'react';

const MovieReviews = ({reviews}) => (
    <div className="review-list">
      {reviews.map(review => (
        <div className="review">
          <h2>{review.headline}</h2>
          <h3>{review.display_title}</h3>
          <h4>{review.byline}</h4>
        </div> )
        )
      }
    </div>
  )
  
  export default MovieReviews