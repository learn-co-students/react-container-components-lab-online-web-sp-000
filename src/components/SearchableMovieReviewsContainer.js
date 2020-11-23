import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/articlesearch.json?';

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  constructor(props) {
    super()
    this.state = {
      reviews: [],
      searchTerm: "test"
    }
  }

  componentDidMount() {
    fetch(URL + `q=${this.state.searchTerm}` 
      + `&api-key=${NYT_API_KEY}`)
    .then(response => response.json())
    .then(data => {
      // console.log("NYT:", data)      
      this.setState({
        reviews: data.results
      })
    })
  }

  updateSearch = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.onSearch(this.state.search)
  }

  render() {
  return <div>
    <div>
      <form>
        <label>
          Enter a Search Term
          <input onChange={this.updateSearch} type="text" name="search_term"/>
          <input onClick={this.onSubmit} type="submit" value="Search" />
        </label>      
      </form>
    </div>
    <div className="searchable-movie-reviews"><MovieReviews reviews={this.state.reviews}/></div>
  </div>
  }
}
 
export default SearchableMovieReviewsContainer