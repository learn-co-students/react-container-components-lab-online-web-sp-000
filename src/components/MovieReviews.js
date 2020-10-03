// Code MovieReviews Here

import React from "react";

const MovieReviews = (props) => {
    
    return (
        
        <div className="review-list">
            {props.searchReviews.map((review, index) => <div className="review" key={index}>{review.headline}</div>)}

            {props.allReviews.map((review, index) => <div className="review" key={index}>{review.headline}</div>)}
        </div>
    )
}

MovieReviews.defaultProps = {
    allReviews: [],
    searchReviews: []
}

export default MovieReviews