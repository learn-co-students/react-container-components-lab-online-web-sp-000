import React from 'react';
import Review from './Review'

const MovieReviews = ({ reviews }) => {
    // console.log('@@reviews', reviews)

    return (
    <div className="review-list">
        { reviews.map(review => {
            return <Review
                key={review.headline}
                headline={review.headline}
                byline={review.byline}
                link={review.link}
                multimedia={review.multimedia.src}
                summaryShort={review.summary_short} />
            })
        }
    </div>
    )
}

export default MovieReviews;

// headline, byline, link, summary_short
// const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;
