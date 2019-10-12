import React from 'react'
// import Review from './Review';

const MovieReviews = ({reviews}) => {
  return (
    <div className="review-list">
      {reviews.map((review, key) => {
        return (
          <div className="review">
            <h3><a href={review.link.url}>{review.headline}</a></h3>
            {review.critics_pick ? <h3> ** Critics Pick **</h3> : ''}
            {review.multimedia ? <img src={review.multimedia.src} /> : ''}
            <h5>by {review.byline}</h5>
            <p>{review.summary_short}</p>
            <p>
              Rated: {review.mpaa_rating}<br/>
              Opening Date: {review.opening_date}
            </p>
          </div>
        )} )}
      </div>

  )
}

export default MovieReviews
