// // Code MovieReviews Here
// import React from 'react'

// const MovieReviews = ({reviews}) => <div className = "review-list"></div>
//     // <div className = "review-list">
//     //     <h1>{reviews}</h1>
//     //     {/* <h2>{headline}</h2>
//     //     <li>{publicationDate}</li>
//     //     <p>{summaryShort}</p>
//     //     <a>{url}</a>
//     //     <img src={image} alt={movieTitle}></img> */}
//     // </div>


// export default MovieReviews
import React from 'react';

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
        <span className="author">{byline}</span>
      </header>
      <blockquote>{summary_short}</blockquote>
    </div>
  );
};

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;