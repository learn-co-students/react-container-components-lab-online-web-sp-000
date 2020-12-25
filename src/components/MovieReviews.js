import React from 'react'

export const MovieReviews = ({movies}) => {
    return (
        <div className="review-list">
            { movies.map(movie => <div className="review" >
                <h1>{movie.headline}</h1>
                <h2>{movie.byline}</h2>
                <a href={movie.link.url}>Site</a>
                <p>{movie.summary_short}</p>
                </div>
            )}
        </div>
    )
}

export default MovieReviews;