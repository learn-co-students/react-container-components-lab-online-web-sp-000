import React from 'react'

const MovieReviews = (props) => {
  return (
    <div className='review-list'>
      {props.reviews ? props.reviews.map(x => <div className='review' key={x.display_title}><a href={x.link.url} >{x.display_title}</a></div>) : null}
    </div>
  )
}

export default MovieReviews
