import React from 'react';

const MovieReviews = ({reviews}) => (
    <div className="review-list">
    {reviews.map(review => 
        //key={review.id}
        <p>title={review.display_title}</p>
        
        )}
    </div>
)

export default MovieReviews