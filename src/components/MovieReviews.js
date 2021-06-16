// Code MovieReviews Here

import React, { Component } from 'react';


const renderRevews = (props) => {
    let count = 0
    return  props.reviews.map( (review) => {
        return(
        <div className='review' key={count += 1}>
           <p>{review.critics_pick}</p>
           <p>{review.display_title}</p>
           <p>{review.headline}</p>
           <p>{review.opening_date}</p>
           <p>{review.publication_date}</p>
           <p>{review.summary_short}</p>
           
       </div>
        )
    })
    
    

}



const MovieReviews = props => {

    return (
    
      <div className="review-list">
          {renderRevews(props)}
   
      </div>
    )
  }



   
  export default MovieReviews
  
