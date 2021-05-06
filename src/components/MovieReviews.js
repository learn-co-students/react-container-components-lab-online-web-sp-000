// Code MovieReviews Here
import React from 'react' 
import Review from './Review.js'


const MovieReviews = ({reviews}) => { return (<div className="review-list">{reviews.map(movie => <div className="review" key={movie.display_title + (Math.random() * 333)}><h2>{movie.display_title}</h2><a href={movie.link.url}><h3>{movie.headline}</h3></a><p>{movie.summary_short}</p></div>)}</div>)}

export default MovieReviews;