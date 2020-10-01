// Code MovieReviews Here

import React from "react";

const MovieReviews = (props) => {



    let array = [];

    if (props.allReviews && props.allReviews.map) {
        array = props.allReviews.map(review => <div className="review">{review.headline}</div>)
    }
    


    return (
        <div className="review-list"> 
            {array}
        </div>
    )
}

// const renderReviews = (reviews) => {
//     reviews.map(review => {
//         <div className="review">{review.headline}</div>
//     })
// }


export default MovieReviews