import React from 'react'
const Review = ({
    display_title,
    summary_short,
    link, 
    headline
}) => {
    return (
        <div key={headline} className="review">
        <h1>{display_title}</h1>
        <p>{summary_short}</p>
        <a href={link.url}>{link.suggested_link_text}</a>
        </div>
    )
}
const MovieReviews = ({reviews}) => (
    <div className="review-list">
        {reviews.map(Review)}
    </div>
)
export default MovieReviews
