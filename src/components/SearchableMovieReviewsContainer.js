import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()

    this.state = {
      reviews: [],
      searchTerm: ""
    };
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    let url = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}&api-key=dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ`
    fetch(url)
    .then(resp=>resp.json())
    .then(resp => {
      this.setState({
        reviews: resp.results
      })
    }) 
  }
    //const MovieReviews = ({ title, img_url })

  render() {
    return (
    <div >  
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Search Term
            <input 
              id="searchTerm"
              name="searchTerm"
              type="text"
              value={this.state.searchTerm}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <button type="submit">Submit Search</button>
        </div>
      </form>
      <div className="searchable-movie-reviews"> 
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    </div>
    )
  }
}

export default SearchableMovieReviewsContainer;