// Code MovieReviews Here
import React from 'react';

// const divStyle = {
//   border: '1px solid black',
//   margin: '5px'
// };

// const MovieReviews = ({ reviews }) => {
//   return (
//     <div className="review-list">
//       {reviews.map(({ display_title, summary_short }) => (
//         <div key={Math.random()} style={divStyle}>
//           <div>{display_title}</div>
//           <div>{summary_short}</div>
//         </div>
//       ))
//       }
//     </div >
//   );
// }

// MovieReviews.defaultProps = {
//   reviews: []
// };

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
        <br />
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
