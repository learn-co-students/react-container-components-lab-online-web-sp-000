// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({reviews}) => (
    <div className="review-list">
            {reviews.map((review, i) => 
                <div className="review" key={i}>
                    {review.display_title}
                    Critics Pick: {review.critics_pick}
                </div>
            )}
    </div>
)

export default MovieReviews