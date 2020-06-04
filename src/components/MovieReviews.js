// Code MovieReviews Here
import React from 'react';

// use return with non-arrow function
const Review = ({headline,byline,link,summary_short}) => {
    return (
      <div key={headline} className="review">
        <header>
          <a className="review-link" href={link.url}>
            {headline}
          </a>
          <br/>
          <span className="author">{byline}</span>
        </header>
        <blockquote>{summary_short}</blockquote>
      </div>
    );
};

// automatically returns with the arrow function
const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
    reviews: []
};

export default MovieReviews;