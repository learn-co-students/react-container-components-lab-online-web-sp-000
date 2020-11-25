// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({ reviews }) => ( 
    < div className="review-list"> 
        {reviews.map((review, index) => 
            <div key={index} className="review">
                {/* {review.critics_pick ? <p>Critics Pick</p>} */}
                <h3><a href={review.link.url}>{review.display_title}</a></h3>
                <p>Rating: {review.mpaa_rating}</p>
                <p>Opening Date: {review.opening_date}</p>
                <p>Publication Date: {review.publication_date}</p>
                <p>Summary: {review.summary_short}</p>
            </div>)} 
    </div>)

export default MovieReviews;