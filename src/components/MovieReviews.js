// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props) => {return <div className={'review-list'}>{ props.reviews.map((r) => {
  return <div className={'review'} key={r.link.url}>
    <h2>{r.display_title} {r.mpaa_rating.length > 0 ? `- ${r.mpaa_rating}` : ''}</h2>
    <h4>{r.headline}</h4>
    <h5><em>{r.byline}</em></h5>
    <a href={r.link.url}>Read Article</a>
  </div>;
})}</div>};

export default MovieReviews;
