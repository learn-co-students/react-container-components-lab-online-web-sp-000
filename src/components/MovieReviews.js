import React from 'react'


const Review = ({
    headline,
    byline,
    link,
    summary_short
  }) => {
    return (
        <div
        className="review"
        key={headline}>
            <header>
                <a className="review-link">
                href={link.url}
                {headline}

                </a>
                <span className="author">{byline}</span>
            </header>
            <p>{summary_short}</p>
        </div>
    )
  }

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;


export default MovieReviews;
