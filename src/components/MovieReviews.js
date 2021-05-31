// Code MovieReviews Here
import React from "react";

const Review = ({
    headline,
    byline,
    link,
    summary_short
}) => {
    return (
        <div key={headline} className="review">
            <header>
                <a className="review-link" href={link.url}>{headline}</a>
                <p className="author">{byline}</p>
            </header>
            <blockquote>{summary_short}</blockquote>
        </div>
    )
}

const MovieReviews = ({ reviews }) => {
    return(
        <div className="review-list">
            {reviews.map(Review)}
        </div>
    )
}

MovieReviews.defaultProps ={
    review: []
}

export default MovieReviews
