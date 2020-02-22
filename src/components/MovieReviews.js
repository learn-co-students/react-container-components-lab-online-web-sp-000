// Code MovieReviews Here
import React from 'react'
   
const renderReviews = (movies) => {
  console.log(movies.movies[0])
}

const MovieReviews = (movies) =>{

    return(
        <div className="review-list">
          {renderReviews(movies)}
        </div>
    )
}

export default MovieReviews
