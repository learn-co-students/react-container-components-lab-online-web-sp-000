import React from 'react'

const MovieReview = ({imgSrc, title, summary, url, linkText}) => {
    return (
        <div>
            <img src={imgSrc} alt="movie image"/>
            <h3>{title}</h3>
            <p>"{summary}"</p>
            <p><a href={url}>{linkText}</a></p>
        </div>
    )
}

export default MovieReview