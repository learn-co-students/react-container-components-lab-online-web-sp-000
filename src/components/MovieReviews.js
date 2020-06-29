import React from 'react';

const MovieReviews = props => {
    return (
        <div className="review-list">
            {props.reviews.map(review => {
                return (
                    <div className="review">
                        <h2>{review.display_title}</h2>
                        <h3>{review.headline}</h3>
                        <p>{review.summary_short}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default MovieReviews;

