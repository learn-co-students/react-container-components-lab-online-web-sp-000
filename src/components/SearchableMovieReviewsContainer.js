import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = { 
      reviews: [],
      searchTerm: ''
    };
  };

  fetchReviews = () => { 
    fetch(URL + `&query=${this.state.searchTerm}`).then(resp => resp.json()).then(json => this.setState({ reviews: json.results })) 
  };

  handleSubmit = event => { this.setState({ searchTerm: event.target.value })}

  render() {
    return(
      <div className='searchable-movie-reviews'>
        <form onSubmit={this.handleSubmit}>
          <input type='text'></input>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  };

  componentDidMount() { 
    console.log(URL + `&query=${this.state.searchTerm}`)
    this.fetchReviews() 
  };

};