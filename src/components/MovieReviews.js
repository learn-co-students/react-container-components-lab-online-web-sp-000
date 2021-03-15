// Code MovieReviews Here
import React from 'react'
import LatestMovieReviewsContainer from './LatestMovieReviewsContainer'
import SearchableMovieReviewsContainer from './SearchableMovieReviewsContainer'

const MovieReviews = ({reviews}) => (
    <div className='review-list'>

      <h1 className='review-list'>{reviews.map(Review)}</h1>
    </div>
  )
const Review = ({headline, summary, link}) => (<div className='review'><a href={link.url}><h1>{headline}</h1></a>
<h1>{summary}</h1>
</div>
)

MovieReviews.defaultProps = {
  reviews: []
}


export default MovieReviews
