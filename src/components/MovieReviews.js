// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({ movie }) => {
  return (
    <div className="review-list">
      <div className="review">
        <ul>
          <li>
            {/* <p>{movie.display_title}: </p> */}
            <p>Headline: {movie.headline}</p>
            <p>Rating: {movie.mpaa_rating}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MovieReviews;
