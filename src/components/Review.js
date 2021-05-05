import React from 'react' 

const Review = ({movie}) => {return <div className="review"><h2>{movie.display_title}</h2><a href={movie.link.url}><h3>{movie.headline}</h3></a><p>{movie.summary_short}</p></div>}

export default Review;