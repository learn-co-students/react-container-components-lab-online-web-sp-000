// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({reviews}) => {
    
    //debugger



    return (<div className="review-list">
                {reviews.map((review, index) => {
                    return (
                        <div className="review" key={index}>
                            <h1>{review.title}</h1>
                    
                            <h2>{review.headline}</h2>
                            <p>{review.summary}</p>
                        </div>
                    )
                })}
            </div>
    )
    
}

MovieReviews.defaultProps = {
    reviews: []
  };

export default MovieReviews