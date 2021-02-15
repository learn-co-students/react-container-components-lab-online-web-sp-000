import React, { PureComponent } from 'react';

const MovieReviews = ({reviews}) => {
    return(
        <div className='review-list'>
            {reviews.map((review, index) => {
                return(
                    <div className='review' key={index}>
                        {review.display_title}
                    </div>
                )
            })}
        </div>
    )

}
export default MovieReviews
