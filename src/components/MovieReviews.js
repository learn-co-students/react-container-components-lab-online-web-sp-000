// Code MovieReviews Here
import React from 'react';

const MovieReviews = props => {
    let reviews = props.reviews.map((review) =>
        <div key={review.link.url} className="review">
            <h2> {review.headline} </h2>
            <p> {review.summary_short} </p>
        </div>)

    return (
        <div className="review-list">
            {reviews}
        </div>
    )
}

export default MovieReviews 
