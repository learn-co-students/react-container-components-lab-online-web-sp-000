import React from 'react';

const Review = ({ headline, byline, link, summary_short }) => {
    return (
        <div key={headline} className="review">
            <div className="review-link">
                <a href={link.url}> </a>
                <h3>{headline}</h3>
                <p className="author">{byline}</p>
                <p className="summary">{summary_short}</p>
            </div>
        </div>
    );
};

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
    reviews: []
};


export default MovieReviews;