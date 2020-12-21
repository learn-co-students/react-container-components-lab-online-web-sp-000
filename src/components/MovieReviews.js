// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props) => 
    <ul className='review-list'>
        {props.reviews.map(review => 
            <li className='review' key={review.headline}>
                Title : {review.display_title}<br />
                MPAA Rating : {review.mpaa_rating}<br />
                Critic's Pick : {review.critics_pick}<br />
                <p>Summary : {review.summary_short}</p>
                <a href={review.link.url}>{review.link.suggested_link_text}</a><br />
            </li>
        )}
    </ul>
    ;

export default MovieReviews;