import React from 'react';

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

const MovieReviews = ({ reviews }) => {
    return (
        <div className='review-list'>
            <ul>
                {reviews.map(review=> 
                    <div className='review'>
                        <li>
                            <h3>{review.headline}</h3>
                            <h4>By: {review.byline}</h4>
                            <p><b>Summary:</b> {review.summary_short}</p>
                        </li>
                    </div> 
                )}
            </ul>        
        </div>
    )
}

export default MovieReviews;