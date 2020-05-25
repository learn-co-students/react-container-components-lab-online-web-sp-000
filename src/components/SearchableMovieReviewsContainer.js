import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const BASE_URL =
  'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +
  `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()

        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }

    

    // renderMovies() {
    //     return this.state.reviews.map((review, index) => <MovieReviews key={index} review={review} />)
    // }

    handleInput = (event) => {
        let savedTarget = event.target
        this.setState({searchTerm: savedTarget.value})
    }

    submitHandler = (event) => {
        event.preventDefault()
        

        let endpoint = BASE_URL + `${this.state.searchTerm}`
        fetch(endpoint)
        .then(response => response.json())
        .then(data => this.setState({ reviews: data.results}))
        .catch(error => console.log(error))
       
    }
    render() {
        return (
            <div className='searchable-movie-reviews'>
                <form onSubmit={event => this.submitHandler(event)}>
                    <input type='text' onChange={this.handleInput}></input>
                    <input type='submit' value='Search Movies'></input>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div> 
        )
    }
}

export default SearchableMovieReviewsContainer

/* API returns an array of objects accessed by .results where each one appears with this information
    byline: "Glenn Kenny"
​​​
critics_pick: 1
​​​
date_updated: "2020-05-21 12:04:06"
​​​
display_title: "Joan of Arc"
​​​
headline: "‘Joan of Arc’ Review: The Saint Is Revisited in Song"
​​​
link: Object { type: "article", url: "http://www.nytimes.com/2020/05/21/movies/joan-of-arc-review.html", suggested_link_text: "Read the New York Times Review of Joan of Arc" }
​​​
mpaa_rating: ""
​​​
multimedia: Object { type: "mediumThreeByTwo210", src: "https://static01.nyt.com/images/2020/05/22/arts/joan1/joan1-mediumThreeByTwo210.jpg", width: 210, … }
​​​
opening_date: null
​​​
publication_date: "2020-05-21"
​​​
summary_short: "Bruno Dumont’s movie features a young actress as the saint in her later years — along with the French pop singer Christophe."
*/