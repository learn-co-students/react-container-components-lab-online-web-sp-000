import React from 'react';

const MovieReviews = (props) => {
    return (<div className="review-list">
        {props.reviews.map((review, idx) => {
        return <div key={idx} className="review">
                <header>
                    <a href="review.url">{review.display_title}</a>
                    <span style={{marginLeft: "10px"}}> Author: {review.byline}</span>
                </header>
                <blockquote>{review.summary_short}</blockquote>
            </div>
        })}
    </div>)
}

MovieReviews.defaultProps = {
    reviews: []
}

// {
//     display_title: "Adventures through the South!", 
//     byline: "F. Froome",
//     summary_short: "A thrilling narration of a young Eskimo experience on his journey through the South."
// }

export default MovieReviews;