import React from 'react'

const getReviews = (reviews) => {
  return reviews.map(review => {
    return (<div className="review">
      <h3>{review.display_title}</h3>
      <p>{review.summary_short}</p>
    </div>)
  })
}

const MovieReviews = props => {

  return (
    <div className="review-list">
      {getReviews(props.reviews)}
    </div>
  )
}

export default MovieReviews
