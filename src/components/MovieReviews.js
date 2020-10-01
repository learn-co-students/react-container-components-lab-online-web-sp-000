import React from 'react';

const Review = ({headline, byline, link, summary_short}) => {
    return(
        <div key={headline} className="review">
            <a className="review-link" href={link.url}>{headline}</a>
            <br/>
            <h2 className="author">{byline}</h2>
            <h3>{summary_short}</h3>
        </div>
    )
}

const MovieReviews = ({reviews}) => <div className="review-list">{reviews.map(Review)}</div>

export default MovieReviews
