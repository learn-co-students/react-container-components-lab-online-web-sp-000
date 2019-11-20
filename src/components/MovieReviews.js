// Code MovieReviews Here
import React from 'react'


const MovieReviews = ({reviews}) => (

    <div className="review-list">
      { reviews.map((review, id) => <li key ={id} className = "review"><a href={review.link.url} target="_blank">{review.display_title}</a> </li>) }
    </div>

)
export default MovieReviews 
