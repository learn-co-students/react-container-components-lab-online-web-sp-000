// Code MovieReviews Here
import React from 'react'
const Review = ({
    display_title,
    byline,
    link,
    summary_short,
    headline
}) => {
    return(
        <div key={display_title} className="review">
            <h1>{display_title}</h1>
            <h3>{byline}</h3>
            <a href={link.url}>{headline}</a>
            <blockquote>{summary_short}</blockquote>
        </div>
        )
    }
const MovieReviews = ({ reviews }) => <div className="review-list">
    {reviews.map(Review)}
</div>

MovieReviews.defaultProps = {
    reviews: []
}
export default MovieReviews