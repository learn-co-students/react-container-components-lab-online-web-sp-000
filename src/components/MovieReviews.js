// Code MovieReviews Here

import React from 'react'

function MovieReviews(props) {
    return (
        
        <div className='review-list'>
            {props.reviews.map(
                review => <p className='review'>{review.display_title}</p>
                )
            }   
        </div>
    )
}

MovieReviews.defaultProps = {
    reviews: []
}

export default MovieReviews