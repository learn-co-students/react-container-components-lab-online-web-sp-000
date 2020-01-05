// Code MovieReviews Here
import React from 'react';
import MovieReview from './MovieReview'

const MovieReviews = ({ reviews }) => (
    <ul className="review-list">
        {/* {console.log(reviews)} */}
        {reviews.map(review => (<MovieReview title={review.display_title} summary={review.summary_short}/>))}
        {/* {movies.map(movie => (<Movie  movieInfo={movie}/>))} */}
    </ul>
)

export default MovieReviews;