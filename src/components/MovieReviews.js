// Code MovieReviews Here
import React from 'react'

const MovieReviews = props => {
  return (
    <div className='review-list'>
      {props.reviews
        ? props.reviews.map((r, idx) => (
          <div key={idx} className='review'>
            {r.headline}
          </div>
        ))
        : ''}
    </div>
  )
}

export default MovieReviews
