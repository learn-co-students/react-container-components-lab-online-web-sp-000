import React from 'react'

const movieReview = ({headline, byline, summary_short}) => {
  return (
    <div className="review">
      <h3>{headline}</h3>
      <p>{byline}</p>
      <p>{summary_short}</p>
    </div>
  )
}


const MovieReviews = ({reviews}) => {
  return (
    <div className="review-list">
      {reviews.map(movieReview)}
    </div>
  )
}

export default MovieReviews