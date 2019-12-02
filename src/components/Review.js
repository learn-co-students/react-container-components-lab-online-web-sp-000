import React from 'react'

const Review = ({ display_title, summary_short }) => (
  <div>
    <h4>{ display_title }</h4>
    <p>{ summary_short }</p>
  </div>
)
 
export default Review;