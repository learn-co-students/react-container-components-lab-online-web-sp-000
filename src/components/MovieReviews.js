import React from 'react';
import LatestMovieReviewsContainer from './LatestMovieReviewsContainer'
import SearchableMovieReviewsContainer from './SearchableMovieReviewsContainer'

const MovieReviews = ({reviews}) => ( 
   
    <div className='review-list' >
        { reviews.map((review, index) => <div className="review" key={index} /> )}
    </div>
)

export default MovieReviews; 