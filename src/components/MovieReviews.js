// Code presentation comp MovieReviews Here
import React from "react";


const Review = ({
  headline,
  byline,
  link,
  summary_short
}) => {
  return (

    <div
      key={headline}
      className="review"
    >
      <header>
        <a
          className="review-link"
          href={link.url}
        >
          {headline}
        </a>
        <br/>
        <p className="author">{byline}</p>
      </header>
      <p>{summary_short}</p>
    </div>
  );
};

const MovieReviews = (props) => <div className= "review-list">{props.reviews.map(Review)}</div>




MovieReviews.defaultProps = {
 reviews: []
 };

export default MovieReviews
