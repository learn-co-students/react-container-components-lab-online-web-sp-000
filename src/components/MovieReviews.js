// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({reviews}) => (
    <div className="review-list"> 
        {reviews.map((review) => {
            return(
                <div className="review">
                    <h2>{review.display_title}</h2>
                    <p>{review.summary_short}</p>
                    <p>{review.headline.split(':')[1]}</p>
                </div>
            )
            
        })}
    </div>
)

export default MovieReviews;
