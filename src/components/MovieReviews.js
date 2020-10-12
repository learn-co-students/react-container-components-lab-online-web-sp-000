import React from 'react'

const allReviews = (reviews) => {
  return reviews.map(review => {
    return (<div className="review">
           <h2>{review.display_title}</h2>
           <p>{review.summary_short}</p>
           </div>)
  })
}

const MovieReviews = props => {

  return (
    <div className="review-list">
      {allReviews(props.reviews)}
    </div>
  )
}

export default MovieReviews
