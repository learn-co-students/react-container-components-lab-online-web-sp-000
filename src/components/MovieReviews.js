// Code MovieReviews Here
import React, { Component } from 'react';

const MovieReviews = props => {
    const Review = ({ display_title }) => <li className="review">{display_title}</li>;
    return (
        <div className="review-list">
            {props.reviews.map(Review)}
        </div>
      )
    }

  export default MovieReviews;