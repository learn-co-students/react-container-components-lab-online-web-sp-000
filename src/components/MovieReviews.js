// Code MovieReviews Here
import React from 'react'





const rev = ({display_title}) => <div className='review'>{display_title}</div>
// const rev = ({display_title}) => {debugger}

const MovieReviews = ({reviews, color}) => <div className="review-list" style={{color:color}}>{reviews.map(rev)}</div>;
	
export default MovieReviews;