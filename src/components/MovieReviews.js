import React from "react";

const Review = ({byline, display_title, summary_short, link}) => { return (
  <div key={display_title} className="review">
    <header>
      <a href={link.url} className='review-link'>{display_title}</a>
      <br/>
      <span className='author'>{byline}</span>
    </header>
    <p>{summary_short}</p>
  </div>
)}

const MovieReviews = ({reviews}) => <div className='review-list'>{reviews.map(Review)}</div>

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;
