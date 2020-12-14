import React from 'react'

export const MovieReviews = ({movies}) => {
    return (
        <div className="review-list">
            { movies.map(movie => <div className="review" >movie</div>) }
        </div>
    )
}

export default MovieReviews;