import React from 'react'

const MovieReviews = (props) => 
    <div className='review-list'>
        { 
            props.reviews.map( review =>{
                return( 
                    <div className = 'review'>
                        {review.summaryShort}
                    </div>
                )       
            })
        }
    </div>

export default MovieReviews
