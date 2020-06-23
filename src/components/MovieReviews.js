// Code MovieReviews Here
import React from 'react';
import MovieReview from './MovieReview';

const MovieReviews = ({reviews}) => (
    <ul className="review-list">
        { reviews.map(review => <li className="review"><MovieReview review={review} /></li>) }
    </ul>
)

export default MovieReviews;