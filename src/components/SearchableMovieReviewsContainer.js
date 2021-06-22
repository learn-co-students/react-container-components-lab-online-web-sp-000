import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'MtAQi15m04nj8fjcpkZOLbbGrwtcHFCg';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: []
  }

  render() {
    return <div className='searchable-movie-reviews'>
      <MovieReviews reviews={this.state.reviews}/>
    </div>
  }

}
            
export default SearchableMovieReviewsContainer;