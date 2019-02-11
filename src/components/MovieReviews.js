// Code MovieReviews Here

import React, {Componet} from 'react'

const MovieReviews = (props) => {

  const movies = props.reviews.map( r => {
    return (
      <div className="review" key={r.display_title}>
        <h1>{r.headline}</h1>
        <h1>{r.link.url}</h1>
        <h1>{r.summary_short}</h1>
      </div>
    )
  })

  return(
    <div className='review-list'>
      {movies}
    </div>
  )

}

export default MovieReviews;
