import React, {Component} from 'react';


const MovieReviews = (props) => {
 return (
     <div className="review-list">
     <h2 className="review">{props.byline}</h2>
     <h3 className="review"  >{props.display_title}</h3>
     <p  className="review">{props.headline}</p>

    

     </div>
 )
 
   
     

}
export default MovieReviews