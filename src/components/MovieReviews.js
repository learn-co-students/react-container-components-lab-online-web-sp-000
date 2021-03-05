// Code MovieReviews Here

import React from 'react';

const MovieReviews = (props) => {
    return(
        <ul className="review-list">
            {props.reviews.map((review, index) => (
                <li className="review" key={index}>
                    <ul>
                        <lh>{review.display_title}</lh>
                        <li>{review.headline}</li>
                        <li>By:{review.byLine}</li>
                        <p>{review.summary_short}</p>
                    </ul>
                </li>)
            )};
        </ul>
    )
}

export default MovieReviews
