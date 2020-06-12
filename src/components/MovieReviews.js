
import React from 'react'

 const Review = ({
     headline, 
     byline,
     summary_short
 }) => {
     return(
         <div key= {headline}
         className= 'review'>
         <br/>
         <span> {headline}</span><br/><br/>
        <span> {summary_short}</span><br/><br/>
        <span className= 'author'> {byline}</span><br/><br/><br/>
         </div>
     )
 }

const MovieReviews = ({reviews}) =>

       <div className= 'review-list'>
           {reviews.map(Review)} 
        </div> 
    
    


     
       
    
export default MovieReviews 