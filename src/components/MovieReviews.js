// Code MovieReviews Here
import React from 'react';
import MovieReview from './MovieReview'

const MovieReviews = ({reviews}) =>  (
    
    <div className = "review-list">
        {
            reviews.map(
                review=>(
                    <MovieReview className="review" display_title = {review.display_title} byline={review.byline} summary_short = {review.summary_short} />
                    )
                )
            }
    </div>
)

export default MovieReviews