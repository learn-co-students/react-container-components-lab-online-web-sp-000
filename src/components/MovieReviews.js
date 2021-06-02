import React from "react";

const MovieReviews = ({ movieData }) => {
  if (movieData !== null) {
    return (
      <ul className="review-list">
          {movieData.map((movie, idx) => {
            return(
              <li key={idx} className="review">
                <h3>{movie.display_title}</h3>
                <h4>Critic's Pick: {movie.critics_pick}</h4>
                <p>{movie.summary_short}</p>
              </li>);
          })}
      </ul>
    );
  } else {
    return null
  }
};

export default MovieReviews;
