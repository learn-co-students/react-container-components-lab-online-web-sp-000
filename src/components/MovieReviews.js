import React from 'react'


const MovieReviews = ( {reviews} ) => (
  <div className='review-list'>
      {reviews.map(( review, index) =>
        <div className='review' key={index} >
          <h3><u>{review.headline}</u></h3>
          <h4>{review.display_title} reviewed by {review.byline}</h4>
          <p>{review.summary_short}</p><br />
        </div>
      )}
  </div>
)

export default MovieReviews
