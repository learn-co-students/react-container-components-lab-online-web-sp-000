import React from 'react';

const MovieReview = ({data}) => (
  <div className="review" key={data.headline}>
    <h2>{data.display_title}</h2>
    <h3>{data.headline}</h3>
    <p>By {data.byline}</p>

    <p>{data.summary_short}</p>
    <a href={data.link.url}>{data.link.suggested_link_text}</a>
    
  </div>
)

export default MovieReview