import React from 'react';

const MovieReviews = ({ reviews }) => {
  return (
    <div className='review-list'>
      {reviews.map(MovieReview)}
    </div>
  )
}

const MovieReview = ({ headline, summary_short }) => {
  return (
    <div key={headline} className='review'>
      <h2>Headline: {headline}</h2>
      <p>Summary: {summary_short}</p>
    </div>
  )
}

export default MovieReviews;