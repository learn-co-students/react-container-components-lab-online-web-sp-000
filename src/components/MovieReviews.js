// Code MovieReviews Here
import React, { Component } from 'react';

const Reviews = ({display_title, link}, headline) => {
  return (
    <div className="review" key={display_title}>
      <a className="review-link" href={link.url}> {headline} </a>
    </div>
  );
};

const MovieReviews = ({reviews }) => {
  return (<div className="review-list">
    {reviews.map(Reviews)}
  </div>);
}
  MovieReviews.defaultProps = {
    reviews: []
  };

  export default MovieReviews;