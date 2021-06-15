// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => {
    return <div className="review-list">
        {props.reviews.map(review => Review(review))}
    </div>
}

const Review = (props) => {
    return <div className="review" key={props.display_title}>
        <h1><a href={props.link.url}>{props.display_title}</a></h1>
        <h2>{props.mpaa_rating}</h2>
        <img src={props.multimedia.src} alt={props.display_title}></img>
    </div>
}

export default MovieReviews

MovieReviews.defaultProps = {reviews: []}