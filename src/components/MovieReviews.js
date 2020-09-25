import React, {Component} from 'react';







const Review = ({
    headline,
    byline,
    summary_short
  }) => {
  return (
    <div className="review">
      <header>
          <h1>{headline}</h1>
    </header>
    <h4>By: {byline}</h4>
      <blockquote>{summary_short}</blockquote>
    </div>
  );
};

const MovieReviews = ({ reviews }) => {
    let i = 0;
    // if (reviews.length === 0) throw 'WTF?'
    return (
        <div className="review-list">
            <ul>
            {reviews.map(review => 
                <div className="review">
                    <h3>{review.headline}</h3>
                    <h4>By: {review.byline}</h4>
                    <p>{review.summary_short}</p>
                </div>
        )
            }
            </ul>
        </div>
    )
};

MovieReviews.defaultProps = {
    reviews: []
}
  
  export default MovieReviews;