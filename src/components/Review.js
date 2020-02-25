import React from 'react';

const Review = ({ headline, byline, link, multimedia, summaryShort }) => {
    return (
    <div className="review">
        <img src={ multimedia } alt={ headline } /><br></br>
        <a className="review-link" href={link.url}>{ headline }</a>
        <span className="author"> by: { byline }</span>
        <h3>Summary:</h3>
        <span className="summary">{ summaryShort }</span>
        <hr></hr>
    </div>
    )
}

export default Review;
