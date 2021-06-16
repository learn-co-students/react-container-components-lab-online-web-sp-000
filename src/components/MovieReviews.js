// Code MovieReviews Here
import React from 'react'

const review = ({review}) => <li className={'review'}> {review}</li>
const MovieReviews  = props => <ul className={'review-list'}>{props.reviews.map(review)}</ul>

export default MovieReviews
