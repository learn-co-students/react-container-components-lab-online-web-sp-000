import React from 'react'

// Code MovieReviews Here
const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
    reviews: []
};

// access each of these attributes within the mapping above, and return the card for each review
const Review = ({
    headline,
    byline,
    link
}) => {
    return (
        <div className="review">
            <header>
                <a className="review-link" href={link.url}>
                    {headline}
                </a>
                <br />
                <span className="author">{byline}</span>
            </header>
        </div>
    );
};

export default MovieReviews;