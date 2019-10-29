// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props) => {
  return(
    <div className="review-list">
      {props.reviews.map(review => {
        return(
          <div className="review">
            <h3>{review.display_title}</h3>
            <p>Rating: {review.mpaa_rating}</p>
            <p>Review Link: <a href={review.link.url}>{review.link.suggested_link_text}</a></p><br></br>
          </div>
        )
      })}
    </div>
  )
}

export default MovieReviews;