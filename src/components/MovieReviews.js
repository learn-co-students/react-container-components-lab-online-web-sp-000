import React from 'react';
const MoviewReviews = (props) => <div className='review-list'>{props.reviews.map(review => <div className='review' ><Review review={review}/></div>)}</div>
export default MoviewReviews

const Review = (review) => <div>
    <h1>
            {review.byline}
    </h1>
</div>

// byline: "Kyle Turner"
// critics_pick: 0
// date_updated: "2020-08-21 07:06:02"
// display_title: "The Sleepover"
// headline: "‘The Sleepover’ Review: My Mother, the Jewel Thief"
// link:
// suggested_link_text: "Read the New York Times Review of The Sleepover"
// type: "article"
// url: "http://www.nytimes.com/2020/08/21/movies/the-sleepover-review.html"
// __proto__: Object
// mpaa_rating: ""
// multimedia: {type: "mediumThreeByTwo210", src: "https://static01.nyt.com/images/2020/08/19/arts/sleepover2/sleepover2-mediumThreeByTwo210.jpg", width: 210, height: 140}
// opening_date: "2020-08-21"
// publication_date: "2020-08-21"
// summary_short: "In this Netflix movie, kids on an adventure to rescue their mother discover more about her past."
