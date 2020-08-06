import React from 'react'
import LatestMovieReviewsContainer from './LatestMovieReviewsContainer'
import SearchableMovieReviewsContainer from './SearchableMovieReviewsContainer'


const MovieReviews = (props) => {
  return(
    <div className="review-list">
      <ul>
      {props.reviews.map(element =>
      <div className="review">
        <li>
          <h2>{element.headline}</h2>
          <h4>{'by: ', element.byline}</h4>
          <p>{element.summary_short}</p>
        </li>
        </div>
        )}
      </ul>
    </div>
  )
}

export default MovieReviews
