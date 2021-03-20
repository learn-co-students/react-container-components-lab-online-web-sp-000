// Code MovieReviews Here
import React from 'react'
import LatestMovieReviewsContainer from './LatestMovieReviewsContainer'
  
const Review = ({ display_title, summary_short, link }) => (
  <div className="review">
    <h3> {display_title} </h3>
    <p> {summary_short} </p>
    <a href={link.url}>{link.suggested_link_text}</a>
  </div>
)

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>

// MovieReviews.defaultProps = { reviews: [] }

export default MovieReviews