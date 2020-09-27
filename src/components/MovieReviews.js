// Code MovieReviews Here

import React from 'react'


//presentational component
//lists a series of movie reviews to the page 
//stateless and functional
//each review is wrapped by an element with class review 
const MovieReviews = (props) => {
    const listOfReviews =  props.reviews.map((review, index) => {
        return <li className='review' key={index}>
            <p> {review.display_title} </p> 
            <p> {review.byline} </p>
            <p> {review.summary_short} </p>
        </li>
    })
    return (
        <ol className="review-list">
            {listOfReviews}
        </ol>
    )
}

export default MovieReviews
