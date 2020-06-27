// Code MovieReviews Here
import React from 'react'
let MovieReviews = props => <div className="review-list">
                                <div className="review">{props.reviews.summary_short}</div>
                                <div className="review">{props.reviews.summary_short}</div>
                                <div className="review">{props.reviews.summary_short}</div>
                            </div>
export default MovieReviews