// Code MovieReviews Here

import React from 'react'

const MovieReviews = ({reviews}) => {
    return(
        <div className="review-list">
            {reviews.map(review => 
                <div className="review">
                    <h1>{review.headline}</h1>
                    <p>by {review.byline}</p>
                    <p>Summary: {review.summary_short}</p>
                    <a href = {review.link.url}>Read More</a>
                </div>
            )}
        </div>
    )
}

export default MovieReviews;
