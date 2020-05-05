import React from 'react'

const MovieReviews = (props) => (
    <div className='review-list'>
        {props.reviews.map(movie => 
            <div className='review'>
                <h2>{movie.display_title}</h2>
                <img src={movie.multimedia.src} alt=""/><br></br>
                <a href={movie.link.url}>{movie.headline}</a>
            </div>
        )}
    </div>
)

export default MovieReviews;
