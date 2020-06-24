import React from "react";

const MovieReviews = ({ reviews }) => {
  return (
    <div className="review-list">
      {reviews &&
        reviews.map(review => {
          return (
            <div className="review">
              <h3>{review.display_title}</h3>
              <p>{review.headline}</p>
            </div>
          );
        })}
    </div>
  );
};

// MovieReviews.defaultProps = {
//   reviews: []
// };

// const Review = ({ title, headline }) => {
//   return (
//     <div className="review">
//       <h3>{title}</h3>
//       <p>{headline}</p>
//     </div>
//   );
// };

export default MovieReviews;
// display_title: 'Bully. Coward. Victim. The Story of Roy Cohn',
// mpaa_rating: '',
//     critics_pick: 0,
//         byline: 'Ben Kenigsberg',
//             headline: '‘Bully. Coward. Victim.’ Review: The Paradox of Roy Cohn',
//                 summary_short: 'A new HBO documentary looks at the man who helped send the director’s grandparents to their execution.',
//                     publication_date: '2020-06-18',
//                         opening_date: null,
//                             date_updated: '2020-06-18 11:04:03',
//                                 link: [Object],
//                                     multimedia: [Object]
