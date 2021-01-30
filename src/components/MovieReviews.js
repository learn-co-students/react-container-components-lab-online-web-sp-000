// Code MovieReviews Here
import React from 'react'





const rev = ({display_title}) => <div className='review'>{display_title}</div>
// const rev = ({display_title}) => {debugger}

const MovieReviews = ({reviews}) => <div className="review-list">{reviews.map(rev)}</div>;
	
export default MovieReviews;