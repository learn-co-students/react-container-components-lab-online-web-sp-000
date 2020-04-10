import React from 'react';
import LatestMovieReviewsContainer from './LatestMovieReviewsContainer'
import SearchableMovieReviewsContainer from './SearchableMovieReviewsContainer'

const MovieReviews = ({reviews, index}) => ( 
   
    <div className={'review-list'} >
        {/* console.log(reviews, "review") */}
        { reviews.map(review => <LatestMovieReviewsContainer reviews={review.review} key={index} /> )}
    </div>
)

export default MovieReviews; 