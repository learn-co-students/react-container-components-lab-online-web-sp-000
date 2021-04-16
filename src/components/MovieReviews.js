import React from 'react'

const movieCard = (review) => { 
    return (
        <div className="review">
            {review.display_title}
        </div>
    )
}

const MovieReviews = props => {
    return (
        <div className="review-list">
            {props.reviews.map(review => movieCard(review))}      
        </div>
    )
}

// without default props, get error message "map is not func on undefined"
MovieReviews.defaultProps = {
    reviews: []
}
export default MovieReviews
