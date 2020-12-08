import React from 'react';

const Review = (props) => {
    return <li className="review"><a href={props.link.url} target="_blank">{props.display_title}</a></li>
}

const MovieReviews = ({ reviews }) => {
    return <ol className="review-list">{ reviews.map(Review) }</ol>
}

MovieReviews.defaultProps = {
    reviews: []
}

export default MovieReviews;