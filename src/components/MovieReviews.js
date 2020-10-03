// Code MovieReviews Here
import React from 'react';

const Review = ({display_title, byline, link, summary_short}) => {
    return (
      <div key={display_title} className="review">
        <a href={link.url}><h2>{display_title}</h2></a>
        <h3>{byline}</h3>
        <p>{summary_short}</p>
      </div>
    )
}

const MovieReviews = ({ reviews }) => {
    return (
      <div className='review-list'>{reviews.map(rev => Review(rev))}</div>
    )
  }


MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
