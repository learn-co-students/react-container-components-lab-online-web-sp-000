// Code MovieReviews Here
import React from 'react';

const MovieReviews = props => {
  return(<div className= "review-list">
    <h1><a href={props.url}>{props.display_title}</a></h1>
    <p className="review">{props.summary}</p>
  </div>)
}

export default MovieReviews
