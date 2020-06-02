// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props) => (
    <div className="review-list">
        { props.reviews.map(review => 
        <div>
        <h2 className="review">{review.display_title}</h2>
        <img src={review.multimedia ? review.multimedia.src : ""} alt=""/>
                <h4>{review.displayTitle}</h4>
                <h6>{review.author}  {review.publicationDate}</h6>
                <p><strong>{review.isCriticsPick ? "CRITICS' PICK" : ""}</strong></p>
                <p><strong>{review.headline}</strong></p>
                <p>{review.shortSummary}</p>
                <a href={review.link.url} target="_">{review.link.suggested_link_text}</a>
        </div>) }
    </div>
)

export default MovieReviews