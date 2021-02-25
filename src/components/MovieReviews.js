import React from 'react';
import { render } from 'react-dom';

const MovieReviews = ({reviews}) => (

    
        
    <div className='review-list'>

        {reviews.map(review => 
            
            <div className='review'>
                <h3>{review.display_title}</h3>
                <p>Summary: {review.summary_short}</p>
                <a href={review.link.url}>{review.link.suggested_link_text}</a>
            </div>
            
        )}


    </div>

    

)
export default MovieReviews;