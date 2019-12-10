// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => {
    return(
        <div className="review-list">
             <div className="review">
                   <h4>{props.headline} by {props.author}</h4>
                   {/* <img src={props.image} alt={props.title}/> */}
                    <a href={props.link_url}>Read this Review</a> 
            </div>
        </div>
           
        
    )
}
    

export default MovieReviews