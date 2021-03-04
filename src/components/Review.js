import React from 'react';

const Review = ({headline, url, criticsPick}) => (
   <div>
      <h4>{headline}</h4>
      <p>Critics pick: {criticsPick}</p>
      <a href={url}>Review link</a>
   </div>
)

export default Review;