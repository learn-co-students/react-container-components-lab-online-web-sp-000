import React from 'react';

const MovieReview = ({ title, summary }) => (
    <li className='review'>
        <h1>{title}</h1>
        <p>{summary}</p>
    </li>
)

export default MovieReview 
