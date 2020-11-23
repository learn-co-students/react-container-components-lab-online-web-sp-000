// Code MovieReviews Here
import React, { Component } from 'react';
import MovieReview from './MovieReview.js'

const MovieReviews = props => {
  return <div className="review-list">
    {props.reviews.map(element => (
      <div div className='review'>
      <MovieReview data={element}/>
      </div>
      )
    )}
  </div>
}
 
export default MovieReviews
