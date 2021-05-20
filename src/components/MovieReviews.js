// Code MovieReviews Here
import React from 'react'
import MovieReview from './MovieReview'

const MovieReviews = ({reviews}) => {
    return (
        <div className="review-list">
            {reviews === null ? "No results" : reviews.map((review, i) => {
                        return <div key={review.display_title} className="review">
                            <MovieReview
                                imgSrc={review.multimedia.src}
                                title={review.display_title}
                                summary={review.summary_short}
                                url={review.link.url}
                                linkText={review.link.suggested_link_text}
                            /> {i < reviews.length - 1 ? <div><br/><br/></div> : ""}
                        </div>
                    }
                )
            }
        </div>
    )
}

export default MovieReviews