// Code MovieReviews Here
import React from 'react'
 
const MovieReviews = (props) => {
    
    // renderReviews = () => {
    //     return this.props.reviews.map(review => <div className='review'>{}</div>)
    // }

        return (
            <div className='review-list'>
                {props.reviews.map(review => <div className='review'>{review.display_title}</div>)}
            </div>
        )
}
export default MovieReviews