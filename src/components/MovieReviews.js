import React from 'react';

const MovieReviews = props => {

    function review(movie){
       return (
        <div className="review">
            <p>{movie.display_title}</p>
            <p>{movie.headline}</p>
        </div>
       )
    }

    return (
        <div className="review-list">
            {props.reviews.map(r => review(r))}
        </div>
    )
}

export default MovieReviews
