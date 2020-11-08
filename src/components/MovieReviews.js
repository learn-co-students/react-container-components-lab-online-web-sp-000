import React from 'react'


const MovieReviews = ({reviews}) => (
    <div className='review-list'>
        {reviews.map((rev, index)=> review(rev, index))}
    </div>
)

const review = ({display_title, multimedia}, index) => (
    <div key={index.toString()} className='review'>
        <h3>{display_title}</h3>
        <img src={multimedia.src} width={multimedia.width} height={multimedia.height}></img>
    </div>
)

export default MovieReviews
