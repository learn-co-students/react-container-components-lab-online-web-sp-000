import React from 'react'

const MovieReviews = ({reviews}) => {
    return (
        <div className="review-list" >
            { reviews.map( review => {
                return (
                    <div className="review" key={review.headline}>
                        <h3>{ review.headline }</h3>
                        <p>{ review.summary_short }</p>
                    </div>
                    )
            } ) }
        </div>
    )
}

MovieReviews.defaultProps = {
    reviews: []
  };

export default MovieReviews