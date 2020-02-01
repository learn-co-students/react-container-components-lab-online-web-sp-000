import React from 'react'

const MovieReviews = (props) => {
  return (
    <ul className='review-list'>
      {props.reviews.map(review=><li className="latest-movie-reviews"><a className='review' href={review.link.url}>{review.headline}</a></li>)}
    </ul>
  )
}

export default MovieReviews
