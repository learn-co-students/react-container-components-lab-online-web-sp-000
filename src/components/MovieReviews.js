// Code MovieReviews Here
import React from 'react';

const divStyle = {
  color: "white",
  backgroundColor: "gray",
  textAlign: "center"
};

const MovieReviews = ({ reviews }) => {
  return (
    <div className="review-list">
      {reviews.map((review, index) =>
        <div className="review" key={index} style={divStyle}>
          <h1>{review.display_title}</h1>
          <img src={review.multimedia.src} alt="" />
          <h2>{review.headline}</h2>
          <h3>By: {review.byline}</h3>
          <h4>{review.date_updated}</h4>
          <p>{review.summary_short}</p>
          <br></br>
        </div>
      )}
    </div>
  );
};

export default MovieReviews;
