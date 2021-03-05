// Code MovieReviews Here

import React from 'react';

const MovieReviews = (props) => {
    return(
        <ul className="review-list">
            {props.reviews.map((review, index) => (
                <ul className="review" key={index}>
                    <h1>{review.display_title}</h1>
                    <li>{review.headline}</li>
                    <li>By:{review.byLine}</li>
                    <p>{review.summary_short}</p>
                </ul>
               )
            )};
        </ul>
    )
}

export default MovieReviews
