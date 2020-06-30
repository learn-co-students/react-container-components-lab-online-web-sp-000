// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({reviews, onClick}) => {
    return (
        <div className="review-list">
            {reviews.map((review, index) => {
                return (
                    <div onClick={onClick} className="review" key={index}>
                        <h4>{review.display_title}</h4>
                        <p>By: {review.byline}</p>
                        <p>{review.summary_short}</p>
                        <p>Critics Pick: {review.critics_pick}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default MovieReviews