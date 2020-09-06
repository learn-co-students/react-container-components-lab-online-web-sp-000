// Code MovieReviews Here
import React from 'react';

const App = props => {
    function reviewList() {
        return props.reviews.map(r => {
            return(<div className="review">
                <h5>{r.display_title}</h5>
                <p>{r.summary_short}</p>
                <a href={r.link.url}>{r.link.suggested_link_text}</a>
            </div>)
        })
    }
    return(
        <div className="review-list">
            {reviewList()}
        </div>
    )
}

export default App