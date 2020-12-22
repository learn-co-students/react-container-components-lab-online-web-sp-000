import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  componentDidMount() {
    fetch(URL)
    .then(response => response.json())
    .then(data => this.setState({ reviews: data.results }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.searchMovie();
  }

  searchMovie() {
    fetch(`${URL}&query=${this.state.searchTerm}`)
    .then(response => response.json())
    .then(response => {
      this.setState({
        reviews: response.results,
      });
    })
  }

  handleInputChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  }

//   updateReviews(searchTerm) {
//     this.setState({
//         searchTerm,
//         reviews: []
//     });
//     this.searchMovie(searchTerm);
// }

  render() {
    return(
      <form onSubmit={(e) => {this.handleSubmit(e)}}>
        <div className="searchable-movie-reviews">
          <MovieReviews key={this.state.searchTerm} reviews={this.state.reviews}/>
        <label>
          Movie Search
          <input type="text" name="input" placeholder="Search movies" value={this.state.searchTerm} onChange={(e) => {this.handleInputChange(e)}}/>
        </label>
          <input type="submit" value="Submit" />
        </div>
      </form>
    )
  }

}

export default SearchableMovieReviewsContainer;
