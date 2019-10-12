import React from 'react'

const Review = (props) => {
  return (
    <div className="review">
      <h3><a href={props.review.link.url}>{props.review.headline}</a></h3>
      {props.review.critics_pick ? <h3> ** Critics Pick **</h3> : ''}
      {props.review.multimedia ? <img src={props.review.multimedia.src} /> : ''}
      <h5>by {props.review.byline}</h5>
      <p>{props.review.summary_short}</p>
      <p>
        Rated: {props.review.mpaa_rating}<br/>
        Opening Date: {props.review.opening_date}
      </p>
    </div>
  )
}

export default Review
