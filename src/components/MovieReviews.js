// Code MovieReviews Here

// presentation componenet - stateless and functional
import React, { Component } from 'react'

const MovieReviews = ({reviews}) => {
    return(
        <div className="review-list">
            {reviews.map(review => {
                return (
                    <ul className="review" key={review.headline}>
                        <li>{ review.display_title }</li>
                        <p>{ review.headline }</p>

                    </ul>
                )
            })
            }
        </div>
    )
}



export default MovieReviews;