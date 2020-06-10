import React from 'react';

const Review = ({ title, review, summary }) => (
    <div className='review'>
        <h2>{ title }</h2>
        <p>{ summary }</p>
        <p>Review: { review.split(':')[1] }</p>
    </div>
)

export default Review;