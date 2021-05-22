import React from "react";

const Review = (props) =>{
    return(
        <li className="review">
            <a href={props.link.url}>{props.display_title}</a>
        </li>
    )
}

const MovieReviews = ({ reviews }) => {
    return(
        <li className="review-list">
            {reviews.map(Review)}
        </li>
    )
}

MovieReviews.defaultProps = {
    reviews: []
}

export default MovieReviews



// #### `<MovieReviews>`

// * Your `MovieReviews` component should be stateless and functional.

// * You are free to lay out each review as you like using the data that the API
// returns, but make sure that the component outputs a top-level element with the
// class `review-list` and that each review is wrapped by an element with class
// `review`.