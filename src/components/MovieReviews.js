// Code MovieReviews Here
import React from 'react'
   
const renderReviews = ({reviews}) => {
 return reviews.map(({display_title,headline})=><li key={headline} className="review">{display_title}</li>)
}

const MovieReviews = (reviews) =>{

    return(
        <div className="review-list">
          {renderReviews(reviews)}
        </div>
    )
}

export default MovieReviews
