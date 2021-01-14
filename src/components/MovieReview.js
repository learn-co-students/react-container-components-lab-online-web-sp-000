import React from 'react';

const MovieReview = ({display_title, byline, summary_short}) => (
    <div>
        <h1>{display_title}</h1>
        <p>by {byline}</p>
        <p>{summary_short}</p>
    </div>
)

export default MovieReview