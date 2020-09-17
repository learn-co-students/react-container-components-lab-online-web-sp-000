// Code MovieReviews Here
import React from 'react';

const Review = ({ display_title }) => <p className="review">{display_title}</p>;
const MovieReviews = ({ reviews }) => <main className="review-list">{reviews.map(Review)}</main>;
export default MovieReviews;