import React from 'react';

const MovieReview = ({review}) => {
    return (
        <div>
            <p>Title: {review.display_title}; {review.headline}</p>
            <p>by {review.byline}</p>
        </div>
    )
}

export default MovieReview;