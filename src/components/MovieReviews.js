// Code MovieReviews Here
import React from 'react';
const Review = ({
  headline,
  byline,
  link,
  summary_short
  }) => {
  return (
    <div key={headline} className="review">
      <a className="review-link" href={link}>{headline}</a>
      {byline}
      {summary_short}
    </div>
  )
}
const movieReviews = ({reviews}) =>

    <div className="review-list">
      {reviews.map(Review)
      }
    </div>


movieReviews.defaultProps={reviews:[]}

export default movieReviews;

// return (<div key={props.reviews.indexOf(review)} className="review">
//   review
// </div>)
