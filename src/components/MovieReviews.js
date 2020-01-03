// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => {
  return(
    <div className="review-list">
      {props.reviews.map(review => <h3 className="review">{review.headline}</h3>)}
    </div>
  )
}

export default MovieReviews

// 0: {display_title: "Advocate", mpaa_rating: "", critics_pick: 0, byline: "Ben Kenigsberg", headline: "‘Advocate’ Review: Defending More Than Just Her Clients", …}
