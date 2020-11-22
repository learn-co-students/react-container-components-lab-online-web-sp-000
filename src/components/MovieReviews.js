
import React from 'react';
const MovieReviews = (props) => {
        return(<div className="review-list">
            {props.reviews.map(review => {
              return (<h3 className="review">{review.headline}</h3>)
                })
            }</div>)
}

export default MovieReviews;