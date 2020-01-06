// import React from 'react'

// const MovieReviews = (props) => {
//   return (
//     <ul className='review-list'> 
//       {props.reviews.map(review =>
//         <li key={review.display_title} className='review'>
//           <h1>{review.headline}</h1>
//           <span>{review.byline}</span>
//           <h2>{review.display_title}</h2>
//           <span>Rated {review.mpaa_rating}</span>
//           <p>{review.summary_short}</p>
//           <a href={review.link.url}>Full Review</a>
//         </li>
//       )} 
//     </ul>
//   )
// }

// MovieReviews.defaultProps = {
//   reviews: []
// }


// export default MovieReviews


import React from 'react';

const MovieReviews = (props) => {
  return(
    <div className='review-list'>
     {props.reviews.map(review => 
        <li key={review.display_title} className='review'>
            <h1>{review.headline}</h1>
        </li>
      )}
    </div>
  )}


export default MovieReviews