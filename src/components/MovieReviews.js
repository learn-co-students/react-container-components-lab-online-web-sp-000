// Code MovieReviews Here
import React from 'react'

const ReviewItem = (rev) => {
  return (
    <li className='review'>
      <h3>{rev.display_title}</h3>
      <p>{rev.critics_pick}</p>
    </li>
  )
}

// stateless and functional.
const MovieReviews = ({ reviews }) => {
  return <ul className='review-list'>{reviews.map(ReviewItem)}</ul>
}

export default MovieReviews